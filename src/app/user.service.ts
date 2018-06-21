import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'http://localhost:8000/create';
    private editUrl = 'http://localhost:8000/edit';
    private changeUrl = 'http://localhost:8000/change';
    private forgotUrl = 'http://localhost:8000/forgot';

    private listUrl = 'http://localhost:8000/list';
    private list2Url = 'http://localhost:8000/list2';
    private list3Url = 'http://localhost:8000/list3';
    private viewUrl = 'http://localhost:8000/view';
    private deleteUrl = 'http://localhost:8000/delete';
    private userEditUrl = 'http://localhost:8000/userEdit';
    private userEditFormUrl = 'http://localhost:8000/userEditForm';
    private loginAdminUrl = 'http://localhost:8000/loginAdmin';
    private userUrl = 'http://localhost:8000/userAdd';
    private activeAllUrl = 'http://localhost:8000/activeAll';
    private inActiveAllUrl = 'http://localhost:8000/inActiveAll';
    private delRecordUrl = 'http://localhost:8000/deleteRecords';
    private activeRecordUrl = 'http://localhost:8000/activeRecords';
    private inactiveRecordUrl = 'http://localhost:8000/inactiveRecords';
    constructor(private http:Http) {
    }
    user_list():Promise<any>{
        console.log("list");

            return this.http
                .post(this.listUrl, JSON.stringify(
                    {a: "a"}), {headers: this.headers})
                .toPromise()
                .then(response => {
                    return response.json();
                })

                .catch(this.handleError);

    }
    user_list2(sort_by:any,direction: any):Promise<any>{
        console.log("list by sorting");
        console.log(direction);
        return this.http
            .post(this.list2Url, JSON.stringify(
                {sort_by:sort_by,direction: direction }), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    user_list3(a: any):Promise<any>{
        console.log("list by seraching");

        return this.http
            .post(this.list3Url, JSON.stringify(
                {search:a }), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    active_all():Promise<any>{
        console.log("active all");

        return this.http
            .post(this.activeAllUrl, JSON.stringify(
                {a: "a"}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    inactive_all():Promise<any>{
        console.log("inactive all");

        return this.http
            .post(this.inActiveAllUrl, JSON.stringify(
                {a: "a"}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    delete_records(items: any):Promise<any>{
        console.log("del selected");

        return this.http
            .post(this.delRecordUrl, JSON.stringify(
                {items: items}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    active_records(items: any):Promise<any>{
        console.log("active selected");

        return this.http
            .post(this.activeRecordUrl, JSON.stringify(
                {items: items}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    inactive_records(items: any):Promise<any>{
        console.log("inactive selected");

        return this.http
            .post(this.inactiveRecordUrl, JSON.stringify(
                {items: items}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }

    user_view(id: any):Promise<any>{
        console.log("user view");
        return this.http
            .post(this.viewUrl, JSON.stringify(
                {id:id}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    user_edit(id: any):Promise<any>{
        console.log("initial edit user");
        return this.http
            .post(this.userEditUrl, JSON.stringify(
                {id:id}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }

    user_edit_form(form:Object):Promise<any>{
        console.log("after edit user");
        console.log(JSON.stringify(form));
        return this.http
            .post(this.userEditFormUrl, JSON.stringify(
                {form: form}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }
    delete(id: any):Promise<any>{
        console.log("user delete trash");
        return this.http
            .post(this.deleteUrl, JSON.stringify(
                {id:id}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }

    create_user(form:Object,address1,address2):Promise<any> {
        console.log("user add");
        console.log(form);

        return this.http
            .post(this.userUrl, JSON.stringify(
                {form: form,address1:address1,address2:address2}
            ), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }

    create(form:Object):Promise<any> {
        console.log("signup");
        console.log(JSON.stringify(form));
        return this.http
            .post(this.heroesUrl, JSON.stringify(
                {form: form}
            ), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();
            })

            .catch(this.handleError);

    }

    admin(logemail:string, logpassword:string):Promise<any> {
        console.log("login");
        return this.http
            .post(this.loginAdminUrl, JSON.stringify({
                logemail: logemail,
                logpassword: logpassword
            }), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();

            })
            .catch(this.handleError);

    }

    edit2(form:Object):Promise<any> {
        console.log("edit");
        console.log(JSON.stringify(form));
        return this.http
            .post(this.editUrl, JSON.stringify(
                {form: form}
            ), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();

            })
            .catch(this.handleError);

    }
    change_password(id,form:Object):Promise<any> {
        console.log("change");
        console.log(JSON.stringify(form));
        return this.http
            .post(this.changeUrl, JSON.stringify(
                {id:id,form: form}
            ), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();

            })
            .catch(this.handleError);

    }
    forgot_password(email):Promise<any> {
        console.log("forgot");

        return this.http
            .post(this.forgotUrl, JSON.stringify(
                {email:email}
            ), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json();

            })
            .catch(this.handleError);

    }

    logout() {
        console.log("log out");
        // remove user from local storage to log user out
        sessionStorage.clear();
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

