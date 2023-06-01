import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  {path: 'cards', component: CardListComponent},
  {path: 'create-card', component: CreateCardComponent},
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'update-card/:id', component: UpdateCardComponent},
  {path: 'card-details/:id', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }