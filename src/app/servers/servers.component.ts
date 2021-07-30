import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: string = '';
  serverCreationStatus: string = 'No server was created.';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer1', 'TestServer2', 'TestServer3'];

  constructor() { 
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  onReset() {
    return this.serverName = '';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
