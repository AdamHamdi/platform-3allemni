import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '' ,
  component:LoginComponent },
  {path: 'login' ,
component:LoginComponent }, 

{
  path: 'home',
  loadChildren: () => import('./main-content/main.module').then(m => m.MainModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
