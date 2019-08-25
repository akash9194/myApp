import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ListComponent } from './list/list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ManagerData } from './manager/manager-data';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'employee', component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'feedback', pathMatch: 'full' },
      { path: 'feedback', component: FeedbackFormComponent },
      { path: 'list', component: ListComponent }
    ]
  },
  { path: 'manager', component: ManagerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    FeedbackFormComponent,
    EmployeeComponent,
    ManagerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, InMemoryWebApiModule.forRoot(ManagerData), HttpClientModule,
    FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
