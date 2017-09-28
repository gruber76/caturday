import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { StarRatingModule } from 'angular-star-rating';


import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './routing/routing.module';

import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    FlexLayoutModule,
    StarRatingModule.forRoot(),
    HttpModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
