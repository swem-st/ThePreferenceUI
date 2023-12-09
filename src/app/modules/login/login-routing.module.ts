import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
// import { ModuleActions } from '../shared/const/module-actions';
// import { PermissionCodes } from '../shared/const/permission-codes';
// import { AuthGuard } from '../shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
  // canActivate: [AuthGuard],
// data: {
//   featureCodes: [
//     PermissionCodes[
//       ModuleActions.SystemManagementAccountRepresentativeTypeView
//     ],
//     PermissionCodes[
//       ModuleActions.SystemManagementAccountRepresentativeTypeManage
//     ],
//   ],
// },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}


