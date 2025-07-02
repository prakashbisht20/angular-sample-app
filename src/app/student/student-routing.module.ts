import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'student',
    pathMatch:'full'
  },
  {
    path:'student',
    component:StudentComponent    
  },
  {
    path:'addstudent',
    component:AddStudentComponent    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
