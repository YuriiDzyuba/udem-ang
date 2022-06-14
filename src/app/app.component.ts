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
  hostName:string = ''
  newName = ''
  allowNewName: boolean = false
  isNewNameCreated: boolean = false;


  constructor() {
    setInterval(()=>{
      this.addNewServer = !this.addNewServer
    }, 3000)
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onCreateNewName(){
    this.allowNewName = true
    this.isNewNameCreated = true
  }
}
