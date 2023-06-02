import { Component } from '@angular/core';
import { CognitoService } from './cognito.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gensparkProjectFront';

  constructor(private cognitoService: CognitoService) {}

  public isAuthenticated(): boolean {
    return this.cognitoService.isAuthenticated();
  }
}
