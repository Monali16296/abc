import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }      from './admin/dashboard.component';
import { UserViewComponent }      from './admin/user_view.component';
import { EditUserComponent }      from './admin/user_edit.component';
import { UserAddComponent }      from './admin/user_add.component';

import { HomeComponent }   from './home/home.component';
import { AboutusComponent }      from './aboutus/aboutus.component';
import { SignupComponent }      from './signup/signup.component';
import { EditComponent }      from './edit/edit.component';
import { ChangePasswordComponent }      from './change-password/change-password.component';
import { ForgotPasswordComponent }      from './forgot-password/forgot-password.component';

import { AppRoutingModule }     from './app-routing.module';
import { UserService } from './user.service';
import { EqualValidator } from './signup/equal-validator.directive';
import {HeaderComponent} from "./header.component";
import { PagerService } from './index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SignupComponent,
        EditComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        EqualValidator,
        HeaderComponent,
        AboutusComponent,
        DashboardComponent,
        UserViewComponent,
        EditUserComponent,
        UserAddComponent
    ],
    providers: [UserService, PagerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */