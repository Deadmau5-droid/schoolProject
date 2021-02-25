import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import{userRead} from '../modals/userRead';
import{userWrite} from '../modals/userWrite';
import { authread } from '../modals/authRead';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<userRead[]> {
    return this.http.get<userRead[]>(
      '/api/school/login'
    );
  }
  getUserById(id: number): Observable<userRead> {
    return this.http.get<userRead>(
      `/api/school/login/${id}`
    );
  }
  createUser(
    username:string,
    password:string,
    isAdmin:boolean,
  
  ): Observable<userWrite> {
    return this.http.post<userWrite>(
      '/api/school/login',
      {  username,
        password,
        isAdmin },
      httpOptions
    );
  }
  editUserById(id:number,
    username:string,
    password:string,
    isAdmin:boolean,
  ): Observable<userWrite> {
    
    return this.http.put<userWrite>(
      `/api/school/login/${id}`,
      { username,
        password,
        isAdmin },
      httpOptions
    );
  }
  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`/api/school/login/${id}`);
  }
  login(username:string,password:string):Observable<any>{
    return this.http.post<authread>("/api/school/auth",{username,password},httpOptions);
  }
  getUserByName(username:string):Observable<userRead>{
    return this.http.get<userRead>(`/api/school/user/${username}`);
  }
}