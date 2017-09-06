import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  likes: number = 0;
  setLikeCount() {
    this.likes++;
  }

  isHidden = true;
  triggerTimeOut = (() => {
    setTimeout(() => this.isHidden = false, 2250)
  })
}
