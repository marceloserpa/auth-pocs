import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-app';


  logout(): void {
    localStorage.removeItem("currentUser");
    window.location.reload();
  }


}
