import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: ToDoListComponent, canActivate: [AuthGuardService]},
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
