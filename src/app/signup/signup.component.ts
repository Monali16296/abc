import { Component  }  from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'app/user.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent {
    student:any;
    student2:any;

    constructor(private userService:UserService, private router:Router) {

    }

    add(form:NgForm) {
        console.log(form.value);
        this.userService.create(form.value)
            .then(response2 => {
                this.student2 = response2;
                console.log(response2);
                if (this.student2.email_status == 1) {
                    alert("Registration is successful");
                    this.router.navigate(['/home']);
                }
                if (this.student2.email_status == 0) {
                    alert("Email is already existing");
                }
            })
    }

    //for login
    check(logemail:string, logpassword:string):void {
        if (!logemail || !logpassword) {
            alert("Please fill all the fields in Log in form");
            return;
        }
        logemail = logemail.trim();
        logpassword = logpassword.trim();


        this.userService.admin(logemail, logpassword)
            .then(response => {


                this.student = response;
                console.log(this.student);

                if (this.student.status == 0) {
                    alert("Email or password is incorrect");
                }
                else {

                    sessionStorage.setItem('edit_firstname', JSON.stringify(this.student.firstname));
                    sessionStorage.setItem('edit_lastname', JSON.stringify(this.student.lastname));
                    sessionStorage.setItem('edit_email', JSON.stringify(this.student.email));
                    sessionStorage.setItem('edit_password', JSON.stringify(this.student.password));
                    sessionStorage.setItem('edit_address1', JSON.stringify(this.student.address1));
                    sessionStorage.setItem('edit_address2', JSON.stringify(this.student.address2));
                    sessionStorage.setItem('id', JSON.stringify(this.student.id));
                    sessionStorage.setItem('role_id', JSON.stringify(this.student.role_id));
                    if(this.student.role_id==1){
                    this.router.navigate(['/dashboard']);
                    }
                    else {
                        this.router.navigate(['/edit', this.student.id]);
                    }

                }

            })
            .catch(error => console.log(error));

    }


}

