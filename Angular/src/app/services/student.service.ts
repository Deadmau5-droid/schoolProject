import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import{studentRead} from '../modals/studentRead';
import{studentWrite} from '../modals/studentWrite';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getStudents(): Observable<studentRead[]> {
    return this.http.get<studentRead[]>(
      '/api/school/student'
    );
  }
  getStudentById(id: number): Observable<studentRead> {
    return this.http.get<studentRead>(
      `/api/school/student/${id}`
    );
  }
  createStudent(
    userName:string,
    firstName:string,
    lastName:string,
    email:string,
    fatherName:string,
    course:string,
    dateOfBirth:string,
  ): Observable<studentWrite> {
    return this.http.post<studentWrite>(
      '/api/school/student',
      { userName,
        firstName,
        lastName,
        email,
        fatherName,
        course,
        dateOfBirth },
      httpOptions
    );
  }
  editStudentById(id:number,
    userName:string,
    firstName:string,
    lastName:string,
    email:string,
    fatherName:string,
    course:string,
    dateOfBirth:string,
  ): Observable<studentWrite> {
    
    return this.http.put<studentWrite>(
      `/api/school/student/${id}`,
      { userName,
        firstName,
        lastName,
        email,
        fatherName,
        course,
        dateOfBirth },
      httpOptions
    );
  }
  deleteStudentById(id: number): Observable<any> {
    return this.http.delete(`/api/school/student/${id}`);
  }
}
