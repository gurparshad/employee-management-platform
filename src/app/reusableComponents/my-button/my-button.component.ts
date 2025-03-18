import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() onBtnClicked = new EventEmitter<any>();

  onClick() {
    this.onBtnClicked.emit();
  }
}
