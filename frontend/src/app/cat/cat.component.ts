import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  id: number;
  private sub: any;
  
  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      // todo: fetch cat info
    });

  }

}
