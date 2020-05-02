import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionService } from './connection-services';
import { Register } from '../interfaces/register.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Login } from '../interfaces/login.interface';
@Injectable()

export class AuthenticationService {

        constructor(

            public http: HttpClient,

            public connectionService: ConnectionService

        ) {

            

        }

 

        public register(registerModel: Register): Observable<any> {

            return this.http.post(`http://localhost:58999/api/Auth/Register`, registerModel)

                .pipe(map((res: Response) => {

                    return res;

                }))

                /*.catch((err: any) => {

                    return Observable.throw(err);

                });*/

            }

 

            public login(loginModel: Login): Observable<any> {

                return this.http.post(`http://localhost:58999/api/Auth/Login`, loginModel)

                    .pipe(map((res: Response) => {

                        return res;

                    }))

                    /*.catch((err: any) => {

                        return Observable.throw(err);

                    });*/

                }

                

}