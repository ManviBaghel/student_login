import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";

@Component({
  selector: 'app-student-emailverify',
  templateUrl: './student-emailverify.component.html',
  styleUrls: ['./student-emailverify.component.css']
})
export class StudentEmailverifyComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

}
