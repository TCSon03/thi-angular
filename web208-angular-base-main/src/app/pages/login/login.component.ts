import { Component, inject } from '@angular/core';
import { AuthformComponent } from '../../components/authform/authform.component';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthformComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authServices = inject(AuthService);
  router = inject(Router);
  toast = inject(HotToastService);

  handleSubmit(value: User) {
    this.authServices.loginUser(value).subscribe({
      next: (data) => {
        localStorage.setItem(
          'token',
          (data as { accessToken: string }).accessToken
        );
        this.toast.success('login ok'), this.router.navigateByUrl('/');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }
}
