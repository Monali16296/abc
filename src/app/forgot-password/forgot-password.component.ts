/**
 * Created by PCQ43 on 10/23/2017.
 */
import 'rxjs/add/operator/switchMap';

import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from 'app/user.service';


@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

    student:any;
    edit_firstname:string;
    edit_lastname:string;
    edit_email:string;
    edit_password2:string;
    edit_address1:string;
    edit_address2:string;

    constructor(private userService:UserService, private router:Router,private route: ActivatedRoute) {

    }


    /*this.route.paramMap
.switchMap((params: ParamMap) => this.userService.user_edit(+params.get('id')))
.subscribe(response => {
    console.log(response);
    this.student = response;

    this.user_firstname =  response.firstname;
    this.user_lastname = response.lastname;
    this.user_email = response.email;
    this.user_address1 = response.address1;
    this.user_address2 = response.address2;
    //   this.user_password = response.password;
    this.user_password2 = response.password;
    this.role_id = response.role_id;
    this.status = response.status;

})*/
    forgot(email) {
        console.log(email);
        this.userService.forgot_password(email)
            .then(response => {
                this.student = response;
                console.log(response);



                if (this.student.forgot_status == 1) {
                    alert("Your new password sent to your email id. Please login with new password.");

                }
                else{
                    alert("You have entered wrong email address.");
                }
            })
            .catch(error => console.log(error));

    }

}

