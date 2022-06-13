import {Component} from "@angular/core";

@Component({
  selector: 'server-comp',
  templateUrl: './server.component.html',
})

export class ServerComponent {
  serverId: number = 23;
  serverStatus: string = 'offline'
}
