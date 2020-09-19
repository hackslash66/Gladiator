import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'index',component:IndexComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'admin',component:AdminComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'**',redirectTo:'/index',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
