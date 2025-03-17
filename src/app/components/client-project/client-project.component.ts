import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee, Project } from '../../model/role';
import { Client } from '../../model/class/Client';
import { Constant } from '../../constants/Constants';
import { ClientProject } from '../../model/class/ClientProject';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  constants = Constant;
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientService = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];
  projectList = signal<Project[]>([]);

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClient();
    this.getAllClientProjects();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  getAllClientProjects() {
    this.clientService
      .getAllClientProjects()
      .subscribe((res: APIResponseModel) => {
        this.projectList.set(res.data);
      });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    this.clientService
      .addClientProjectUpdate(formValue)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Project created successfully');
        } else {
          alert(res.message);
        }
      });
  }
}
