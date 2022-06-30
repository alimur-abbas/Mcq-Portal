import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { McqPortalService } from 'src/app/service/mcq-portal.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  enable: boolean = false;

  constructor(private router: Router, private examService: McqPortalService) { }

  ngOnInit(): void {
  }
  onClickTerms() {
    this.enable = !this.enable;
  }
  proceed() {
    console.log("1");
    // this.examService.readCsv().subscribe((data) => {
    //   console.log(data);
    // });
    this.router.navigate(["/examcode"]);
    console.log("3");
  }

}
