import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';

import {
  MdCardModule,
  MdListModule,
} from '@angular/material';

import { StarRatingModule } from 'angular-star-rating';


import { AppRoutingModule } from '../routing/routing.module';

import { CatComponent } from '../cat/cat.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, DashboardComponent, CatComponent],
      imports: [
        AppRoutingModule, 
        MdListModule,
        StarRatingModule.forRoot()],

      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
