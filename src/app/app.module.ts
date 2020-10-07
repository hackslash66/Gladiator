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
import { AdminacceptanceComponent } from './adminacceptance/adminacceptance.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { DashboardnavbarComponent } from './dashboardnavbar.component';
import { EditforuserComponent } from './editforuser/editforuser.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
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
    IndexnavbarComponent,
    AdminacceptanceComponent,
    AboutusComponent,
    ContactusComponent,
    ProductinfoComponent,
    EditComponent,
    OrderdetailsComponent,
    DashboardnavbarComponent,
    EditforuserComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
