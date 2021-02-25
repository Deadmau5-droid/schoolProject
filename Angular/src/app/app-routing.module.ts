import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateNewStudentPageComponent } from './create-new-student-page/create-new-student-page.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'student/:id', component: StudentPageComponent },
  { path: 'create-students', component: CreateStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  {path:'create-new',component:CreateNewStudentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
