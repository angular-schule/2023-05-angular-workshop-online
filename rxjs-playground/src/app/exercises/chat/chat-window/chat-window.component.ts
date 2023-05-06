import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'rxw-chat-window',
  templateUrl: './chat-window.component.html',
  styles: [],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule]
})
export class ChatWindowComponent {

  @Input() name?: string;
  @Output() send = new EventEmitter<string>();
  @Output() leave = new EventEmitter<void>();

  form = new FormGroup({
    message: new FormControl('', { nonNullable: true })
  });
  online = true;

  sendMessage() {
    this.send.emit(this.form.value.message);
    this.form.reset({ message: '' });
  }

  leaveChat() {
    this.online = false;
    this.leave.emit();
  }

}
