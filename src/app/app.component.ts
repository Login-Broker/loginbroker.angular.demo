import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-demo';

  handleSessionReceived(sessionId: string): void {
    debugger
    console.log('Received sessionId', sessionId);
    // Verify the sessionId on your server-side or API and get the logged-in user email
  }

  handleErrorReceived(error: string): void {
    debugger
    console.log('Error happened', error);
  }

  // startLoginProcess(tenantName: string, platform: string): void {
  //   this.loginBrokerService.startLoginProcess(
  //     tenantName,
  //     platform,
  //     this.handleSessionReceived.bind(this),
  //     this.handleErrorReceived.bind(this)
  //   );
  // }
}
