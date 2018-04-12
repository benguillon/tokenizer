import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserService } from './services/user.service';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ChoixProjetComponent } from './choix-projet/choix-projet.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';

const appRoutes:Routes = [
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  },
  {
    path: 'manageProject',
    component: ManageProjectComponent
  },
  {
    path: 'manageRequest',
    component: ManageRequestComponent
  },
  {
    path: 'choixProjet',
    component: ChoixProjetComponent
  },
  {
    path: 'editProject/:id',
    component: EditProjectComponent
  },
  {
    path: '',
    component: LoginFormComponent,
  },
  { path: '**', 
  component: NotfoundComponent 
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    NotfoundComponent,
    UserComponent,
    ManageProjectComponent,
    EditProjectComponent,
    ChoixProjetComponent,
    ManageRequestComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    DataService, 
    UserService
  ], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
