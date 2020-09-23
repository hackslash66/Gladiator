import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminComponent } from './admin/admin.component';
import { IndexnavbarComponent } from './indexnavbar.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProductlistComponent,
    IndexComponent,
    AdminpanelComponent,
    AdminComponent,
    IndexnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
