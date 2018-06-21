/**
 * Created by PCQ43 on 10/23/2017.
 */
import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from 'app/user.service';


@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    student:any;
    edit_firstname:string;
    edit_lastname:string;
    edit_email:string;
    edit_password2:string;
    edit_address1:string;
    edit_address2:string;

    constructor(private userService:UserService, private router:Router) {

    }

    ngOnInit():void {

        this.edit_firstname = JSON.parse(sessionStorage.getItem('edit_firstname'));
        this.edit_lastname = JSON.parse(sessionStorage.getItem('edit_lastname'));
        this.edit_email = JSON.parse(sessionStorage.getItem('edit_email'));
        this.edit_password2 = JSON.parse(sessionStorage.getItem('edit_password'));
        this.edit_address1 = JSON.parse(sessionStorage.getItem('edit_address1'));
        this.edit_address2 = JSON.parse(sessionStorage.getItem('edit_address2'));

    }

    home():void {
        this.router.navigate(['/home']);
    }

    edit(form:NgForm) {
        console.log(form.value);
        this.userService.edit2(form.value)
            .then(response => {
                this.student = response;
                console.log(response);



                if (this.student.status == 1) {
                    alert("Profile updated successfully");
                    sessionStorage.setItem('edit_firstname', JSON.stringify(this.student.firstname));
                    sessionStorage.setItem('edit_email', JSON.stringify(this.student.email));
                    sessionStorage.setItem('edit_lastname', JSON.stringify(this.student.lastname));
                    sessionStorage.setItem('edit_address1', JSON.stringify(this.student.address1));
                    sessionStorage.setItem('edit_address2', JSON.stringify(this.student.address2));
                    sessionStorage.setItem('edit_password', JSON.stringify(this.student.password));
                    sessionStorage.setItem('id', JSON.stringify(this.student.id));
                }
                else{
                    alert("Please enter correct password");
                }
            })
            .catch(error => console.log(error));
    }

}

