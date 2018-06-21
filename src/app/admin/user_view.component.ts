import 'rxjs/add/operator/switchMap';
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'app/user.service';


@Component({
    templateUrl: './user_view.component.html',
    styleUrls: ['./user_view.component.css']
})
export class UserViewComponent  implements OnInit  {
    student: any;
    view_firstname: string;
    view_lastname: string;
    view_address1: string;
    view_address2: string;
    view_email: string;


    constructor(private userService:UserService,    private route: ActivatedRoute) {
      }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.userService.user_view(+params.get('id')))
            .subscribe(response => {
                console.log(response);
                this.student = response;

                this.view_firstname =  response.firstname;
                this.view_lastname = response.lastname;
                this.view_email = response.email;
                this.view_address1 = response.address1;
                this.view_address2 = response.address2;



            })

    }
}