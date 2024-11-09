import { Component, Input } from '@angular/core';
import { tenderIndexModel } from '../../models/dataTable/tenderIndexModel';

@Component({
  selector: 'app-tendercard',
  standalone: true,
  imports: [],
  templateUrl: './tendercard.component.html',
  styleUrl: './tendercard.component.css'
})
export class TendercardComponent {
@Input() data:tenderIndexModel={id:1,companyName:"Company Name-01",department: "department-01",tenderType: "Tender Type-01",workName:"Work Name-01",workOrderAmount: 100000,
  workOrderIssueDate:  new Date("26/10/2024"),workOrderCompletationDate: new Date("26/10/2024"),workStatus: "Work Status-01",PGStatus: "In Department",
  secStatus: "in Department",paymentStatus: "No Payment Status",  tenderStatus: "Tender Status",remark: "Remark -01"};
}
