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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 
// import { CardDetailsComponent } from './card-details/card-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    UpdateCardComponent,
    CardDetailsComponent,
    CreateCardComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }