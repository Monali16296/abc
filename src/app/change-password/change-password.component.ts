/**
 * Created by PCQ43 on 10/23/2017.
 */
import 'rxjs/add/operator/switchMap';

import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from 'app/user.service';


@Component({
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

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
    change(form:NgForm) {
        console.log(form.value);
       // this.userService.change_password(form.value)
        this.route.paramMap
            .switchMap((params: ParamMap) => this.userService.change_password(+params.get('id'),form.value))
            .subscribe(response => {
                this.student = response;
                console.log(response);



                if (this.student.change_status == 1) {
                    alert("Password has been changed successfully");

                }
                else{
                    alert("Please verify current password");
                }
            })
    }

}

