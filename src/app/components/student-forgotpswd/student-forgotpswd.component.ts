import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";

@Component({
  selector: 'app-student-forgotpswd',
  templateUrl: './student-forgotpswd.component.html',
  styleUrls: ['./student-forgotpswd.component.css']
})
export class StudentForgotpswdComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

}
