import { Component , OnInit }  from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import * as _ from 'underscore';

import { UserService } from 'app/user.service';
import { PagerService } from 'app/index';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
    student:any;

    e:number;

    direction:string;
    checkBox = false;
    pageSize:number;
    currentPage:number;

    constructor(private userService:UserService, private router:Router, private pagerService:PagerService) {


    }

    private allItems:any[];
    pager:any = {};

    //   paged items
    pagedItems:any[];


    ngOnInit():void {

        this.userService.user_list()
            .then(response => {


                this.allItems = response;

                console.log(this.allItems.length);
                if (this.allItems) {
                    // initialize to page 1
                    this.setPage(1);
                }

            })
            .catch(error => console.log(error));

    }

    setPage(page:number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);


        this.pageSize = this.pager.pageSize;
        this.currentPage = this.pager.currentPage;

        console.log("size");
        console.log(this.pager.pageSize);
        console.log(this.pager.currentPage);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

        this.e = this.pager.startIndex;
    }

    sorting(sort_by:string) {


        this.direction = this.direction === 'asc' ? 'desc' : 'asc';
        this.userService.user_list2(sort_by, this.direction)
            .then(response => {

                this.allItems = response;

                // initialize to page 1
                this.setPage(1);


            })
            .catch(error => console.log(error));

    }

    view_user(id:number) {

        this.router.navigate(['/view', id]);

    }

    delete_user(id:number) {


        var r = confirm("Do you really want to delete this user?");
        if (r == true) {
            this.userService.delete(id)
                .then(response2 => {
                    this.student = response2;
                    console.log(response2);
                    if (this.student.status == 1) {
                        alert("user has been deleted successfully");

                        this.ngOnInit();
                    }

                })
        }


    }

    edit_user(id:number) {

        this.router.navigate(['/edit_user', id]);

    }

    search1:any;

    search(search1:any) {

        this.userService.user_list3(search1.value)
            .then(response => {

                this.allItems = response;
                if (this.allItems) {
                    this.setPage(1);
                }

            })
            .catch(error => console.log(error));

    }

    active_all_records() {
        this.userService.active_all()
            .then(response => {


                this.allItems = response;
                if (this.allItems) {
                    this.ngOnInit();

                }


            })
            .catch(error => console.log(error));

    }

    inactive_all_records() {
        this.userService.inactive_all()
            .then(response => {

                this.student = response;


                console.log(this.student);
                this.allItems = response;
                if (this.allItems) {
                    this.ngOnInit();
                }


            })
            .catch(error => console.log(error));

    }

    selectedItems:any = [];


    search_box(students, event) {

        var index = this.selectedItems.indexOf(students.id);
        console.log(index);
        if (event.target.checked) {
            if (index === -1) {
                this.selectedItems.push(students.id);

            }


        } else {
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
                console.log(event.target.checked);
            }
        }


        console.log(this.selectedItems);
    }

    //for checking or unchecking all checkboxes


    toggleCheckBox(students, event) {

        this.checkBox = !this.checkBox;

        var index = this.selectedItems.indexOf(students);
        console.log(index);

        console.log(event.target.checked);
        if (event.target.checked) {

            for (let entry of students) {

                this.selectedItems.push(entry.id);
            }


        }
        else {

            this.selectedItems = [];


        }
        console.log(this.selectedItems);


    }

    delete_records(items:any):void {


        if (items.length != 0) {

            this.userService.delete_records(items)
                .then(response => {

                    this.student = response;


                    console.log(this.student);
                    this.allItems = response;
                    if (this.allItems) {
                        this.ngOnInit();

                    }


                })
                .catch(error => console.log(error));
            items.length = 0;


        }
        else {
            alert("Please select at least one record for delete");
        }
    }

    active_records(items:any):void {


        if (items.length != 0) {
            console.log(items);
            this.userService.active_records(items)
                .then(response => {

                    this.student = response;


                    console.log(this.student);
                    this.allItems = response;
                    if (this.allItems) {
                        this.ngOnInit();
                    }


                })
                .catch(error => console.log(error));

            items.length = 0;


        }
        else {
            alert("Please select at least one record for active");
        }
    }

    inactive_records(items:any):void {


        if (items.length != 0) {
            console.log(items);
            this.userService.inactive_records(items)
                .then(response => {

                    this.student = response;


                    console.log(this.student);
                    this.allItems = response;
                    if (this.allItems) {
                        this.ngOnInit();
                    }


                })
                .catch(error => console.log(error));
            items.length = 0;

        }
        else {
            alert("Please select at least one record for inactive");
        }
    }

}