import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_model/Employee';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  idEmployee: number;
  noInfo: boolean = false;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() { }

  searchEmployee(){

    this.employees = [];
    this.noInfo = false;

    if (this.idEmployee) {
      this.employeeService.getEmployeeById(this.idEmployee).subscribe( data => {
        this.employees[0] = data;
        if(data == null) {
          this.noInfo = true;      
        }
      });
    } else {
      this.employeeService.getEmployees().subscribe( data => {
        this.employees = data;
      });
    }

    this.idEmployee = null;

  }

}
