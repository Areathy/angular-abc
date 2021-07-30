import { Component } from "@angular/core";
// import { Server } from "http";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./Server.component.css']
})
export class ServerComponent {

    serverId: number = 2;
    serverStatus: string = 'online';

    getServerId() {
        return this.serverId;
    }

}