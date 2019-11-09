import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PlatformComponent } from './platform/platform.component';
import { CompanyComponent } from './company/company.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import {TabViewModule} from 'primeng/tabview';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// counter 
//import { ContactFormComponent } from './contact-form/contact-form.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent, data: { title: 'InnoAppsTech' } },
  { path: 'solutions', component: SolutionsComponent, data: { title: 'Solutions | InnoAppsTech' }},
  { path: 'platform', component: PlatformComponent, data: { title: 'Platform | InnoAppsTech' }},
  { path: 'clients', component: ClientsComponent, data: { title: 'Clients | InnoAppsTech'} },
  { path: 'company', component: CompanyComponent, data: { title: 'Company | InnoAppsTech'}} ,
  { path: 'about-us', component: AboutComponent, data: { title: 'About us | InnoAppsTech'} },
  { path: 'privacy', component: PrivacyComponent, data: { title: 'Privacy | InnoAppsTech'}},
  { path: 'terms', component: TermsComponent, data: { title: 'Terms & Conditions | InnoAppsTech'}},
  { path: 'contact', component: ContactComponent, data: { title: 'Contact us InnoAppsTech'},
  children: [
    // 1st Route
   //{ path: 'personal',  component: PersonalComponent, outlet:'qust' },
   // 2nd Route
   //{ path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 3rd Route
   //{ path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 4th Route
   //{ path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 5th Route
  // { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  ]
},

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SolutionsComponent,
    PlatformComponent,
    CompanyComponent,
    ClientsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //ContactFormComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    RouterModule.forRoot(routes ),
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
