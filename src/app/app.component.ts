import { Component } from '@angular/core';
import { AngularLoginBrokerLibraryService } from 'angular-login-broker-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-demo';

  constructor(private loginBrokerService: AngularLoginBrokerLibraryService) {}

  handleSessionReceived(sessionId: string): void {
    console.log('Received sessionId', sessionId);
    // Verify the sessionId on your server-side or API and get the logged-in user email
  }

  handleErrorReceived(error: string): void {
    console.log('Error happened', error);
  }

  startLoginProcess(tenantName: string, platform: string): void {
    this.loginBrokerService.startLoginProcess(
      tenantName,
      platform,
      this.handleSessionReceived.bind(this),
      this.handleErrorReceived.bind(this)
    );
  }
}
