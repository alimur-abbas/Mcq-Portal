import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExamCodeComponent } from 'src/app/exam-code/exam-code.component';
import { ExaminationModel } from 'src/app/model/examination.model';
import { QuestionModel } from 'src/app/model/question.model';
import { UserExamAttempt } from 'src/app/model/userExamAttempt.model';
import { UserExamAttemptWrapper } from 'src/app/model/userExamAttemptWrapper.model';
import { McqPortalService } from 'src/app/service/mcq-portal.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  examrWapper: UserExamAttemptWrapper = new UserExamAttemptWrapper();
  examinationmodel: ExaminationModel = new ExaminationModel();
  userexamAttempt: UserExamAttempt = new UserExamAttempt();
  questions: QuestionModel[];
  min: number = 99;
  sec: number = 60;
  btn: number[] = [];
  interval: any;
  slNo: number = 1;
  display: QuestionModel;
  length: number = 0;


  constructor(private router: Router, private examService: McqPortalService,) {

  }



  ngOnInit(): void {
    this.getExamDetails();
    setInterval(() => {
      if (this.min >= 0) {
        this.min--;
      }

    }, 60000);
    setInterval(() => {
      if (this.sec > 0) {
        this.sec--;
      }
      else
        this.sec = 59;
    }, 1000)


    // for (let i = 1; i <= this.questions.length; i++) {
    //   this.btn.push(i);
    // }
    // console.log(this.btn);


    // for (let i = 1; i <= this.questions.length; i++) {
    //   this.btn.push(i);
    // }
    // console.log(this.btn);



  }
  ngAfterViewInit() {
    this.buttonMethod();
    // this.display = this.questions[0];
  }

  onClickButton(button: number, no: Number) {
    console.log(button);
    if (no == 1) {
      this.slNo++;
    }
    else {
      this.slNo--;
    }

    this.display = this.questions[button - 1];
  }
  onSubmit() {

  }
  onChange(Ans: any) {
    console.log(Ans.target.value);

  }
  async getExamDetails() {
    console.log(this.examService.examCode);

    const response: any = await this.examService.getExamDetail(this.examService.examCode).toPromise();
    this.examrWapper = response;
    console.log(this.examrWapper);

    this.examinationmodel = this.examrWapper.examinationModel;
    this.userexamAttempt = this.examrWapper.userExamAttempt;
    this.questions = this.examinationmodel.questionModelList;
    console.log(this.questions);
    this.length = this.questions.length;
    console.log(this.length);


    this.display = this.questions[0];
  }
  async buttonMethod() {
    for (let i = 1; i <= this.questions.length; i++) {
      this.btn.push(i);
    }
    console.log(this.btn);
  }
  onClickButtonList(button: number) {
    this.slNo = button;
    this.display = this.questions[button - 1];
  }





}
