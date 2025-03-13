import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }

  // inputType = 'checkbox';
  // firstName = 'simon';
  // selectedState: string = 'Please select state';
  // isChecked: boolean = false;
  // showWelcomeAlert() {
  //   alert('welcome to the angular 18 tutorial');
  // }
  // showWelcomeAlert2(message: string) {
  //   alert(message);
  // }
  // onSelectedStateChange() {
  //   alert('state change');
  // }
}
