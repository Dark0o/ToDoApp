import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuardService } from '../services/auth-service/auth-guard.service';
import { ToDoDetailsComponent } from '../components/to-do-details/to-do-details.component';
import { ToDoListComponent } from '../components/to-do-list/to-do-list.component';
import { AddToDoComponent } from '../components/add-to-do/add-to-do.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'todos',
    component: ToDoListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'todos/new',
    component: AddToDoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'todos/:id',
    component: ToDoDetailsComponent,
    canActivate: [AuthGuardService],
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
