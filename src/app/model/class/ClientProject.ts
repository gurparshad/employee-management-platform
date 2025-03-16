export class ClientProject {
  clientProjectId: number;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  leadByEmpId: string;
  completedDate: string;
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: number;
  projectCost: number;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: string;

  constructor() {
    this.clientProjectId = 0;
    this.projectName = '';
    this.startDate = '';
    this.expectedEndDate = '';
    this.leadByEmpId = '';
    this.completedDate = '';
    this.contactPerson = '';
    this.contactPersonContactNo = '';
    this.totalEmpWorking = 0;
    this.projectCost = 0;
    this.projectDetails = '';
    this.contactPersonEmailId = '';
    this.clientId = '';
  }
}
