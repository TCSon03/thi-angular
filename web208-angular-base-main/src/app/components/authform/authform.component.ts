import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-authform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authform.component.html',
  styleUrl: './authform.component.css',
})
export class AuthformComponent {
  @Output() onSubmit = new EventEmitter();
  authForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    this.onSubmit.emit(this.authForm.value);
  }
}
