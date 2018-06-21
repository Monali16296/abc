import { Component  }  from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'app/user.service';


@Component({
    templateUrl: './user_add.component.html',
    styleUrls: ['./user_add.component.css']
})

export class UserAddComponent {
    student2:any;

    constructor(private userService:UserService, private router:Router) {

    }

    address1:string;
    address2:string;

    add(form:NgForm, address1, address2) {
        console.log(form.value);

        console.log(address1.value);

        this.userService.create_user(form.value, address1.value, address2.value)
            .then(response2 => {
                this.student2 = response2;
                console.log(response2);
                if (this.student2.email_status == 1) {
                    alert("Registration is successful");
                    this.router.navigate(['/dashboard']);
                }
                if (this.student2.email_status == 0) {
                    alert("Email is already existing");
                }
            })
    }


    //for login

}

