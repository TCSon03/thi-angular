import { Component, inject } from '@angular/core';
import { AuthformComponent } from '../../components/authform/authform.component';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthformComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authServices = inject(AuthService);
  router = inject(Router);
  toast = inject(HotToastService);

  handleSubmit(value: User) {
    this.authServices.registerUser(value).subscribe({
      next: () => {
        this.toast.success('register ok'), this.router.navigateByUrl('/login');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }
}
