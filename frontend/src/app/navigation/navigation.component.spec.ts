import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserRegistrationService} from '../service/user-registration.service';
import {UserParametersService} from '../service/user-parameters.service';
import {UserLoginService} from '../service/user-login.service';
import {CognitoUtil} from '../service/cognito.service';
import {AboutComponent, HomeComponent, HomeLandingComponent} from '../public/home.component';
import {AwsUtil} from '../service/aws.service';
import {UseractivityComponent} from '../secure/useractivity/useractivity.component';
import {MyProfileComponent} from '../secure/profile/myprofile.component';
import {SecureHomeComponent} from '../secure/landing/securehome.component';
import {JwtComponent} from '../secure/jwttokens/jwt.component';
import {DynamoDBService} from '../service/ddb.service';
import {LoginComponent} from '../public/auth/login/login.component';
import {RegisterComponent} from '../public/auth/register/registration.component';
import {ForgotPassword2Component, ForgotPasswordStep1Component} from '../public/auth/forgot/forgotPassword.component';
import {LogoutComponent, RegistrationConfirmationComponent} from '../public/auth/confirm/confirmRegistration.component';
import {ResendCodeComponent} from '../public/auth/resend/resendCode.component';
import {NewPasswordComponent} from '../public/auth/newpassword/newpassword.component';

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


import { StarRatingModule } from 'angular-star-rating';


import { AppRoutingModule }     from '../routing/routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';

import { CatComponent } from '../cat/cat.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CatComponent,
        NavigationComponent,
        DashboardComponent,
        NewPasswordComponent,
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        JwtComponent
      ],
      imports: [
        AppRoutingModule,
        MdListModule,
        MdCardModule,
        MdToolbarModule,
        StarRatingModule.forRoot(),
        HttpModule,
        FormsModule
      ],
      providers: [
        CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
