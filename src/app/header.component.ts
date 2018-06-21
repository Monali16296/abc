/**
 * Created by PCQ43 on 10/23/2017.
 */
import { Component }  from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'app/user.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./app.component.css'],

})

export class HeaderComponent {

    edit_firstname:string;
    edit_lastname:string;
    id:number;
    role_id:number;

    constructor(private userService:UserService, private router:Router) {

        setInterval(() => {
            //  console.log("changedetector");
            this.edit_firstname = JSON.parse(sessionStorage.getItem('edit_firstname'));
            this.edit_lastname = JSON.parse(sessionStorage.getItem('edit_lastname'));
            this.id = JSON.parse(sessionStorage.getItem('id'));
            this.role_id = JSON.parse(sessionStorage.getItem('role_id'));



        });
    }

    logout():void {
        this.userService.logout();
    }
    onSelect(a){
        if(a=="/change_password") {

            this.router.navigate([a, this.id]);
        }
        if(a=="/home"){
            this.router.navigate([a]);
            this.userService.logout();
        }
    }
}

