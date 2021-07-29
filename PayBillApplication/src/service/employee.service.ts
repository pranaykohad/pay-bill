import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app.constant';
import { Employee, IEmployee } from 'src/model/Emp';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(empId: string): Observable<Employee> {
    return this.http.get<Employee>(`${BASE_URL}emp/${empId}`);
  }

  getAllEmp(): Observable<Employee> {
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   Authorization: 'my-auth-token',
    // });
    // return this.http.get<Employee>(`${BASE_URL}emp/all`, { headers: headers });
    return this.http.get<Employee>(`${BASE_URL}emp/all`);
  }

  saveEmployee(emp: IEmployee): Observable<Employee> {
    return this.http.post<Employee>(`${BASE_URL}emp`, emp);
  }

  deleteEmployee(emp: IEmployee): Observable<Employee> {
    return this.http.post<Employee>(`${BASE_URL}emp/delete`, emp);
  }
}
