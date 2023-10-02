import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberCenterComponent } from './member/member-center/member-center.component';
import { FormComponent } from './login/form/form.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'center',
    component: MemberCenterComponent,
    // canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
