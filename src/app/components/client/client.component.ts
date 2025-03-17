import { Component, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/role';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  currentDate: Date = new Date();

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client Created Successfully');
          this.loadClients();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete');

    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Client deleted successfully');
            this.loadClients();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onEdit(data: Client) {
    console.log('data-->', data);
    this.clientObj = data;
  }
}
