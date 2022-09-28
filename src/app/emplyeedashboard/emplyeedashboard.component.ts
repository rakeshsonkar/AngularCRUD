import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {EmpyloyeeModel} from './employeeDashboardModel';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emplyeedashboard',
  templateUrl: './emplyeedashboard.component.html',
  styleUrls: ['./emplyeedashboard.component.css']
})
export class EmplyeedashboardComponent implements OnInit {

  formValue !:FormGroup;
  employeeModelObj : EmpyloyeeModel = new EmpyloyeeModel();
  employeeData: any;
  addShow!:boolean;
  addUpdate!:boolean;


  constructor(private formBuilder:FormBuilder,private ApiService:ApiService ) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmp();
  }
  postEmployeedetails=()=>{
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    this.ApiService.postEmployee(this.employeeModelObj).subscribe( res =>{
      console.log(res);
      alert("employee  add successfully")
      this.formValue.reset();
      let ref=document.getElementById('cancel')
      ref?.click();
      this.getAllEmp();
    },
    err=>{
      alert("Something went worng")
    })
  }

  getAllEmp(){
    this.ApiService.getEmployee().subscribe(res=>{
      this.employeeData=res;
    })
  }
  empDelete=(row:any)=>{
    this.ApiService.deleteEmployee(row.id).subscribe(res=>{
      this.getAllEmp();
    })
  }
  onEdit=(row:any)=>{
    this.addShow=false;
    this.addUpdate=true;
    this.employeeModelObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['salary'].setValue(row.salary)
  }
  updateEmployeedetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    this.ApiService.UpadateEmployee(this.employeeModelObj,this.employeeModelObj.id).subscribe(res=>{
      alert("update successfully")
      this.formValue.reset();
      let ref=document.getElementById('cancel')
      ref?.click();
      this.getAllEmp();
    })
  }
  addEmp=()=>{
    this.formValue.reset();
    this.addShow=true;
    this.addUpdate=false;
  }
}
