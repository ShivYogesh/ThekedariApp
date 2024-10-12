import { Component } from '@angular/core';
import{tenderIndexModel}from '../../../../src/models/tenderIndexModel';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-tenderindex',
  standalone: true,
  imports: [FormsModule],
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
  addnew(objhtmlForm:NgForm)
  {
    console.log(objhtmlForm.value);
  }

}
