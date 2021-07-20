import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService, private ngxService: NgxUiLoaderService) { }

  
    ngOnInit() {
      this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
      // Stop the foreground loading after 5s
      setTimeout(() => {
        this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      }, 5000);
  }

}
