import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi its me';
  addNewServer: boolean = false
  serverName:string = ''

  constructor() {
    setInterval(()=>{
      this.addNewServer = !this.addNewServer
    }, 3000)
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
