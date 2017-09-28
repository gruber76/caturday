import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cat, HttpCatService } from '../model';

import { StarRatingModule } from 'angular-star-rating';
import { MdCardModule } from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  providers:  [ HttpCatService ]
})
export class CatComponent implements OnInit {
  catId: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private httpCatService: HttpCatService
  ) { }

  @Input() cat: Cat;

  ngOnInit(): void {
    this.cat = new Cat();
    // get cat when `catId` param changes
    this.route.paramMap.subscribe(p => this.getCat(p.has('catId') && +p.get('catId')));
  }

  private getCat(catId: number): void {
    // when no id or id===0, skip this.
    if (!catId) {
      return;
    }

    this.httpCatService.getCat(catId).toPromise().then(cats => {
      if (cats[0]) {
        this.cat = cats[0];
      } else {
        // What to do when the cat service comes up empty?
      }
    }).catch(reason => {
      // What to do if the service errors out?
      // Putting in a temp cat for now.
      this.cat = new Cat(4, 'cat title', 4, 2, 'http://cats.caturday.joshuagruber.com/cute-2493496_1920.jpg');
    })
    ;
  }

}
