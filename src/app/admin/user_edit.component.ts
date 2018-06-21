/**
 * Created by PCQ43 on 10/23/2017.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from 'app/user.service';


@Component({
    templateUrl: './user_edit.component.html',
    styleUrls: ['./user_edit.component.css']
})
export class EditUserComponent implements OnInit {

    student:any;
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_address1: string;
    user_address2: string;
    user_password2: string;
    role_id: number;
    status: number;
    constructor(private userService:UserService, private router:Router,private route: ActivatedRoute) {

    }

    ngOnInit():void {
        this.route.paramMap
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

            })

    }

    edit(form:NgForm) {
        console.log(form.value);
        this.userService.user_edit_form(form.value)
            .then(response => {
                this.student = response;
                console.log(response);
                if (this.student.edit_status == 1) {
                    alert("User has been updated successfully");
                    if(this.student.role_id==1) {
                        sessionStorage.setItem('edit_firstname', JSON.stringify(this.student.firstname));
                        sessionStorage.setItem('edit_lastname', JSON.stringify(this.student.lastname));
                        sessionStorage.setItem('edit_email', JSON.stringify(this.student.email));
                        sessionStorage.setItem('edit_password', JSON.stringify(this.student.password));
                        sessionStorage.setItem('edit_address1', JSON.stringify(this.student.address1));
                        sessionStorage.setItem('edit_address2', JSON.stringify(this.student.address2));
                        sessionStorage.setItem('id', JSON.stringify(this.student.id));
                        sessionStorage.setItem('role_id', JSON.stringify(this.student.role_id));
                    }
                        this.router.navigate(['/dashboard']);
                }

            })
            .catch(error => console.log(error));
    }
    home(){
        this.router.navigate(['/dashboard']);
    }

}

