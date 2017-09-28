import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Cat } from './cat';
import { NewCat } from './newCat';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpCatService {
  private _catsUrl = 'https://api.caturday.joshuagruber.com/cats';  // URL to web api

  constructor (private http: Http) {}

  getCats (): Observable<Cat[]> {
    return this.http.get(this._catsUrl)
                    .map(this.extractData)
                    // .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }

  getCat(catId: number) {
    return this.http
            .get(this._catsUrl + '/' + catId)
            .map((r: Response) => r.json().data as Cat[]);
  }

  addCat (newCat: NewCat): Observable<Cat>  {
    let body = JSON.stringify(newCat);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._catsUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}