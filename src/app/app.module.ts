import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { FormsModule} from '@angular/forms';
import { UpdateCardComponent } from './update-card/update-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
// import { CardDetailsComponent } from './card-details/card-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardListComponent,
    UpdateCardComponent,
    CardDetailsComponent,
    CreateCardComponent
    // AppComponent,
    // CardListComponent,
    // CreateCardComponent,
    // UpdateCardComponent,
    // CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }