import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import{userRead} from '../modals/userRead';
import{userWrite} from '../modals/userWrite';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<userRead[]> {
    return this.http.get<userRead[]>(
      '/api/school/login'
    );
  }
  getUserById(id: string): Observable<userRead> {
    return this.http.get<userRead>(
      `/api/school/login/${id}`
    );
  }
  createUser(
    Username:string,
    Password:string,
    isAdmin:boolean,
  
  ): Observable<userWrite> {
    return this.http.post<userWrite>(
      '/api/school/login',
      {  Username,
        Password,
        isAdmin, },
      httpOptions
    );
  }
  editUserById(id:number,
    Username:string,
    Password:string,
    isAdmin:boolean,
  ): Observable<userWrite> {
    
    return this.http.put<userWrite>(
      `/api/school/login/${id}`,
      { Username,
        Password,
        isAdmin, },
      httpOptions
    );
  }
  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`/api/school/login/${id}`);
  }
}