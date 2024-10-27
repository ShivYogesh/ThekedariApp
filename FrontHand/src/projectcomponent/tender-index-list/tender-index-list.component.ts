import { Component } from '@angular/core';
import { tenderIndexModel } from '../../models/tenderIndexModel';

@Component({
  selector: 'app-tender-index-list',
  standalone: true,
  imports: [],
  templateUrl: './tender-index-list.component.html',
  styleUrl: './tender-index-list.component.css'
})
export class TenderIndexListComponent {
  Datatabelname="Tender Index  Masters List";
  _tenderIndexList:tenderIndexModel[]=[
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},
  {id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",secStatus: "in Department",paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",remark: "Remark -01"},

];




}
