import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { McqPortalService } from 'src/app/service/mcq-portal.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  enable: boolean = false;
  openModal;
  authenticated: boolean = false;
  display = 'none';


  constructor(private router: Router, private examService: McqPortalService) {



  }

  ngOnInit(): void {
    setTimeout(() => this.openModalDialog(), 1000);


  }
  onClickTerms() {
    this.enable = !this.enable;

  }
  ngAfterViewInit() {


  }
  proceed() {


    this.examService.readCsv().subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(["/examcode"]);
    console.log("3");
  }
  openModalDialog() {
    this.display = 'block'; //Set block css
  }



}
