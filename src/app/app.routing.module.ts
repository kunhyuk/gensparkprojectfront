import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component'
import { RouteGuardService } from './route-guard.service'

const routes: Routes = [
  {path: 'cards', component: CardListComponent}, //, canActivate: [RouteGuardService]
  {path: 'create-card', component: CreateCardComponent}, //, canActivate: [RouteGuardService]
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'update-card/:id', component: UpdateCardComponent}, //, canActivate: [RouteGuardService]
  {path: 'card-details/:id', component: CardDetailsComponent, canActivate: [RouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
