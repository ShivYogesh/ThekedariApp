import { Injectable } from '@angular/core';
import { tenderIndexModel } from '../models/tenderIndexModel';

@Injectable({
  providedIn: 'root'
})
export class TenderIndexService {

  constructor() { }

  
  getTenderIndexList()
  {
   let tenderIndexList:tenderIndexModel[]=[
      {
        id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",
        PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status", 
        tenderStatus: "Tender Status",
        remark: "Remark -01"
      },
        {
          id:2,companyName:"Company Name-02",
          department: "department-02",
          tenderType: "Tender Type-02",
          workName:"Work Name-02",
          workOrderAmount: 100000,
          workOrderIssueDate:  new Date("26/10/2024"),
          workOrderCompletationDate: new Date("26/10/2024"),
          workStatus: "Work Status-02",
          PGStatus: "In Department",
          secStatus: "in Department",
          paymentStatus: "No Payment Status",
          tenderStatus: "Tender Status",
          remark: "Remark -02"
        },
      {
        id:3,companyName:"Company Name-03",
        department: "department-03",
        tenderType: "Tender Type-03",
        workName:"Work Name-03",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-03",PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -03"
    },
      {
        id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -01"
    },
      {id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",
        PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -01"
    },
      {
        id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",
        PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -01"
    },
      {
        id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",
        PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -01"
    },
      {
        id:1,companyName:"Company Name-01",
        department: "department-01",
        tenderType: "Tender Type-01",
        workName:"Work Name-01",
        workOrderAmount: 100000,
        workOrderIssueDate:  new Date("26/10/2024"),
        workOrderCompletationDate: new Date("26/10/2024"),
        workStatus: "Work Status-01",
        PGStatus: "In Department",
        secStatus: "in Department",
        paymentStatus: "No Payment Status",
      tenderStatus: "Tender Status",
      remark: "Remark -01"
    },
    {
      id:1,companyName:"Company Name-01",
      department: "department-01",
      tenderType: "Tender Type-01",
      workName:"Work Name-01",
      workOrderAmount: 100000,
      workOrderIssueDate:  new Date("26/10/2024"),
      workOrderCompletationDate: new Date("26/10/2024"),
      workStatus: "Work Status-01",
      PGStatus: "In Department",
      secStatus: "in Department",
      paymentStatus: "No Payment Status",
    tenderStatus: "Tender Status",
    remark: "Remark -01"
  },
  {
    id:1,companyName:"Company Name-01",
    department: "department-01",
    tenderType: "Tender Type-01",
    workName:"Work Name-01",
    workOrderAmount: 100000,
    workOrderIssueDate:  new Date("26/10/2024"),
    workOrderCompletationDate: new Date("26/10/2024"),
    workStatus: "Work Status-01",
    PGStatus: "In Department",
    secStatus: "in Department",
    paymentStatus: "No Payment Status",
  tenderStatus: "Tender Status",
  remark: "Remark -01"
},
{
  id:1,companyName:"Company Name-01",
  department: "department-01",
  tenderType: "Tender Type-01",
  workName:"Work Name-01",
  workOrderAmount: 100000,
  workOrderIssueDate:  new Date("26/10/2024"),
  workOrderCompletationDate: new Date("26/10/2024"),
  workStatus: "Work Status-01",
  PGStatus: "In Department",
  secStatus: "in Department",
  paymentStatus: "No Payment Status",
tenderStatus: "Tender Status",
remark: "Remark -01"
},
{
  id:1,companyName:"Company Name-01",
  department: "department-01",
  tenderType: "Tender Type-01",
  workName:"Work Name-01",
  workOrderAmount: 100000,
  workOrderIssueDate:  new Date("26/10/2024"),
  workOrderCompletationDate: new Date("26/10/2024"),
  workStatus: "Work Status-01",
  PGStatus: "In Department",
  secStatus: "in Department",
  paymentStatus: "No Payment Status",
tenderStatus: "Tender Status",
remark: "Remark -01"
},
{
  id:1,companyName:"Company Name-01",
  department: "department-01",
  tenderType: "Tender Type-01",
  workName:"Work Name-01",
  workOrderAmount: 100000,
  workOrderIssueDate:  new Date("26/10/2024"),
  workOrderCompletationDate: new Date("26/10/2024"),
  workStatus: "Work Status-01",
  PGStatus: "In Department",
  secStatus: "in Department",
  paymentStatus: "No Payment Status",
tenderStatus: "Tender Status",
remark: "Remark -01"
},
      
    ];
    return (tenderIndexList);
  }
}
