import { Component } from '@angular/core';
import{tenderIndexModel}from '../../../../src/models/tenderIndexModel';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tenderindex',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tenderindex.component.html',
  styleUrl: './tenderindex.component.css'
})
export class TenderindexComponent {
  formheading="Tender Index Form";
  companys=["Jai Durga Enterprises","Shiv Construction"];
  departments=["NNSRE","DUDASRE","RED","GangohBlock","ZPSRE","PWDSRE"];
  tenderTypes=["Tender Type-01","Tender Type-02"];
  workStatus=["Cancel","NotStrated","Pending","REG","Running","workCompleted"];
  PGStatus=["In Department","Relese"];
  SECStatus=["In Department","Relese"];
  paymentStatus=["First and Running","Full and Final","No Payment","Wating For Payment","Not Ready For Payment"];
  tenderStatus=["Active","Closed","Disputed","Finaly Closed","REG"];

  objTenderIndex:tenderIndexModel={
    id:1,
    companyName:"Shiv Construction",
    department:"",
    tenderType:"",
    workName:"Work Name",
    workOrderAmount:2000000.00,
    workOrderIssueDate:new Date(),
    workOrderCompletationDate:new Date("01/01/2000"),
    workStatus:"",
    PGStatus:"",
    SecStatus:"",
    secStatus:"",
    paymentStatus:"",
    tenderStatus:"",
    remark:""

  }
  dataform:FormGroup;
  error:Boolean=false;
  constructor(){
    this.dataform=new FormGroup({
      id:new FormControl("",),
      companyName:new FormControl("Shiv Construction",[Validators.required]),
      department:new FormControl("",[Validators.required]),
      tenderType:new FormControl("",[Validators.required]),
      workName:new FormControl("",[Validators.required]),
      workOrderAmount:new FormControl("",),
      workOrderIssueDate:new FormControl("",),
      workOrderCompletationDate:new FormControl("",),
      workStatus:new FormControl("",[Validators.required]),
      PGStatus:new FormControl("",[Validators.required]),
      SecStatus:new FormControl("",[Validators.required]),
      secStatus:new FormControl("",[Validators.required]),
      paymentStatus:new FormControl("",[Validators.required]),
      tenderStatus:new FormControl("",[Validators.required]),
      remark:new FormControl("",)

    });
  }
  addnew(objhtmlForm:NgForm)
  {
    console.log(objhtmlForm.value);
  }

}
