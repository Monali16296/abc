import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { AboutusComponent }      from './aboutus/aboutus.component';
import { SignupComponent }      from './signup/signup.component';
import { EditComponent }      from './edit/edit.component';
import { ChangePasswordComponent }      from './change-password/change-password.component';
import { ForgotPasswordComponent }      from './forgot-password/forgot-password.component';

import { DashboardComponent }      from './admin/dashboard.component';
import { UserViewComponent }      from './admin/user_view.component';
import { EditUserComponent }      from './admin/user_edit.component';
import { UserAddComponent }      from './admin/user_add.component';

const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'change_password/:id', component: ChangePasswordComponent},
    {path: 'forgot_password', component: ForgotPasswordComponent},

    {path: 'dashboard', component: DashboardComponent},
    {path: 'view/:id', component: UserViewComponent},
    {path: 'edit_user/:id', component: EditUserComponent},
    {path: 'add', component: UserAddComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */