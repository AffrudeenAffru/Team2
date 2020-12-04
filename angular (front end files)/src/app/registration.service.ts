import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient } from '@angular/common/http';
import { Subscriber } from './subscriber';
import { Prepaidtopostpaid } from './prepaidtopostpaid';
@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  temp='';
  temp1='';
  tempemailId='';
  tempmobileNum='';
  temptypeOfSubscriber='';
  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:4321/login",user)
  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:4321/registeruser",user);
    }
    public loginUserFromRemote1(subscriber:Subscriber):Observable<any>{
      return this._http.post<any>("http://localhost:4321/loginsub",subscriber)
      }
      public registerUserFromRemote1(subscriber:Subscriber):Observable<any>{
        return this._http.post<any>("http://localhost:4321/regsub",subscriber);
        }
        ////
        public pretopost(prepaidtopostpaid:Prepaidtopostpaid):Observable<any>{
          return this._http.post<any>("http://localhost:4321/regsubptop",prepaidtopostpaid);
          }
          //forget pass
          public  updateUserPasswordFromRemote(id2:string,pass:string):Observable<any>{
            return this._http.put<any>("http://localhost:4321/updatepassword/"+id2, pass)
          }
}
