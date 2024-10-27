import { Component } from '@angular/core';
import{tenderIndexModel}from '../../../../src/models/tenderIndexModel';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-tenderindex',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,KeyValuePipe],
  templateUrl: './tenderindex.component.html',
  styleUrl: './tenderindex.component.css'
})
export class TenderindexComponent {
  /* set intinal value for all variabel  */ 
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
    secStatus:"",
    paymentStatus:"",
    tenderStatus:"",
    remark:""

  }
  dataform:FormGroup;
  error:Boolean=false;
  constructor(){
    this.dataform=new FormGroup({
      id:new FormControl("01",),
      companyName:new FormControl("Shiv Construction",[Validators.required]),
      department:new FormControl("NNSRE",[Validators.required]),
      tenderType:new FormControl("Tender Type-01",[Validators.required]),
      workName:new FormControl("pls Type work Name",[Validators.required]),
      workOrderAmount:new FormControl("0.0",),
      workOrderIssueDate:new FormControl("26/10/2024",),
      workOrderCompletationDate:new FormControl("26/10/2024",),
      workStatus:new FormControl("NotStrated",[Validators.required]),
      PGStatus:new FormControl("In Department",[Validators.required]),
      secStatus:new FormControl("In Department",[Validators.required]),
      paymentStatus:new FormControl("Not Ready For Payment",[Validators.required]),
      tenderStatus:new FormControl("Active",[Validators.required]),
      remark:new FormControl("",)

    });
  }
  saveNewRecord()
  {
    this.setDataOBJValue();
    console.log(this.objTenderIndex.id);
   console.log(this.objTenderIndex.companyName);
   console.log(this.objTenderIndex.department);
   console.log(this.objTenderIndex.tenderType);
   console.log(this.objTenderIndex.workName);
   console.log(this.objTenderIndex.workOrderAmount);
   console.log(this.objTenderIndex.workOrderIssueDate);
   console.log(this.objTenderIndex.workOrderCompletationDate);
   console.log(this.objTenderIndex.workStatus);
   console.log(this.objTenderIndex.secStatus);
   console.log(this.objTenderIndex.paymentStatus);
   console.log(this.objTenderIndex.remark);
  }
  setDataOBJValue(){
   
   /* This Function Set UI(HTML Form Value into Object */
    this.objTenderIndex.id=this.dataform.controls['id'].value;
    this.objTenderIndex.companyName=this.dataform.controls['companyName'].value;
    this.objTenderIndex.department=this.dataform.controls['department'].value;
    this.objTenderIndex.tenderType=this.dataform.controls['tenderType'].value;
    this.objTenderIndex.workName=this.dataform.controls['workName'].value;
    this.objTenderIndex.workOrderAmount=this.dataform.controls['workOrderAmount'].value;
    this.objTenderIndex.workOrderIssueDate=this.dataform.controls['workOrderIssueDate'].value;
    this.objTenderIndex.workOrderCompletationDate=this.dataform.controls['workOrderCompletationDate'].value;
    this.objTenderIndex.workStatus=this.dataform.controls['workStatus'].value;
    this.objTenderIndex.PGStatus=this.dataform.controls['PGStatus'].value;
    this.objTenderIndex.secStatus=this.dataform.controls['secStatus'].value;
    this.objTenderIndex.paymentStatus=this.dataform.controls['paymentStatus'].value;
    this.objTenderIndex.tenderStatus=this.dataform.controls['tenderStatus'].value;
    this.objTenderIndex.remark=this.dataform.controls['remark'].value;
  }

}
