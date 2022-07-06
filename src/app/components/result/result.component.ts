import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { McqPortalService } from 'src/app/service/mcq-portal.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: Number;
  constructor(private examService: McqPortalService, private router: Router) {

  }


  ngOnInit(): void {
    this.score = this.examService.score;
  }
  back() {
    this.router.navigate(["/welcome"]);
  }

}
