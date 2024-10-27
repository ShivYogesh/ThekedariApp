export interface tenderIndexModel {
  id: number,
  companyName: string,
  department: string,
  tenderType: string,
  workName: string,
  workOrderAmount: number,
  workOrderIssueDate: Date,
  workOrderCompletationDate: Date,
  workStatus: string,
  PGStatus: string,
  secStatus: string,
  paymentStatus: string,
  tenderStatus: string,
  remark: string
}