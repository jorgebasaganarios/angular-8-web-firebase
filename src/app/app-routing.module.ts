import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { ContactComponent } from './contact/contact.component';
// import { UserComponent } from './user/user.component';
// import { LoginComponent } from './login/login.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './guard/auth.guard';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from '././guard/secure-inner-pages.guard';
import { ContactSuccesComponent } from './contact/contact-succes/contact-succes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*{ path: 'sing-in', redirectTo: '/sign-in', pathMatch: 'full'},*/
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todolist', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'sign-up', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'userprofile', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'contacto', component: ContactComponent },
  { path: 'contact-succes', component: ContactSuccesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
