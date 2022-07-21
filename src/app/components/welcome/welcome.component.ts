
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtToken } from 'src/app/model/jwtToken.model';
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
  uuidValue: string;

  param: Params = null;


  constructor(private router: Router, private examService: McqPortalService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        this.param = params;
        this.uuidValue = params.uuid;
        // console.log(params.uuid);

      })
    if (Object.keys(this.param).length !== 0) {
      this.authenticated = true;
    }
    setTimeout(() => this.openModalDialog(), 1000);

  }
  onClickTerms() {
    this.enable = !this.enable;
    this.examService.sendParam(this.uuidValue).subscribe((data: JwtToken) => {
      console.log(data.token);
      this.examService.getToken(data.token);
    });

  }
  ngAfterViewInit() {
    // this.examService.sendParam(this.uuidValue).subscribe((data) => {
    //   console.log(data);
    // });
  }
  proceed() {


    // this.examService.readCsv().subscribe((data) => {
    //   console.log(data);
    // });

    this.router.navigate(["/examcode"]);

  }
  openModalDialog() {
    this.display = 'block'; //Set block css
  }




}
