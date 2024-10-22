import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard } from './guard/admin.guard';

export const routes: Routes = [
  { path: '', canActivate: [adminGuard], component: HomeComponent },
  { path: 'product/add', canActivate: [adminGuard], component: AddComponent },
  {
    path: 'product/edit/:id',
    canActivate: [adminGuard],
    component: EditComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
