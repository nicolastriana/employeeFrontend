import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
