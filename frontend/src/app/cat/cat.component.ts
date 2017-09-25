import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarRatingModule } from 'angular-star-rating';
import {
  MdCardModule
} from '@angular/material';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {

      // todo: fetch cat info
    this.route.paramMap.subscribe(p => {if (p.has('id')) { this.id = +p.get('id')} });
  }
  
}
