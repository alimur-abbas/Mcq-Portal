import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { McqPortalService } from 'src/app/service/mcq-portal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private examservice: McqPortalService, private route: Router) { }

  ngOnInit(): void {
  }
  onClick() {
    this.examservice.login();
    this.route.navigate(["/welcome"]);

  }

}
