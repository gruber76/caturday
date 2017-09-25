import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CatComponent } from './cat.component';

import { StarRatingModule } from 'angular-star-rating';

import {
  ActivatedRoute, ActivatedRouteStub, Router
}
from '../../testing/router-stubs';


import {
  MdCardModule
} from '@angular/material';

let activatedRoute:  ActivatedRouteStub;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;
 
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();

    activatedRoute.testParamMap = {id: 5};

    TestBed.configureTestingModule({
      declarations: [CatComponent],
      providers: [
        {provide: ActivatedRoute, use: activatedRoute }
      ],
      imports: [
        MdCardModule,
        StarRatingModule
    ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });

// ToDo: determine how/why the route isn't getting injected properly during test.

});
