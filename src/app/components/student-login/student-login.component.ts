import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor( public ngAuthService: NgAuthService) { }

  ngOnInit() {
  }

}
