import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../_model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = `${ environment.HOST }/api`

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`${this.url}/employee/${id}`);
  }

}
