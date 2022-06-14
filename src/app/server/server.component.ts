import {Component} from "@angular/core";

@Component({
  selector: 'server-comp',
  templateUrl: './server.component.html',
})

export class ServerComponent {
  serverId: number = 23;
  serverStatus: string = 'offline'
  value: string = 'some string'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }


  getValue(): string {
    return this.value
  }

  getColor():string {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
