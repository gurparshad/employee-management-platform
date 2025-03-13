import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoading: boolean = true;
  masterService = inject(MasterService);

  // TODO: add error handling here, use pipe, also add the loading state.
  ngOnInit(): void {
    this.masterService
      .getDesignations()
      .subscribe((result: APIResponseModel) => {
        this.designationList = result.data;
        this.isLoading = false;
      });
  }
}
