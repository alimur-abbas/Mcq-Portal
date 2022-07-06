import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { ExamCodeComponent } from 'src/app/components/exam-code/exam-code.component';
import { ExaminationModel } from 'src/app/model/examination.model';
import { QuestionModel } from 'src/app/model/question.model';
import { UserAnswerModel } from 'src/app/model/userAnswer.model';
import { UserExamAttempt } from 'src/app/model/userExamAttempt.model';
import { UserExamAttemptWrapper } from 'src/app/model/userExamAttemptWrapper.model';
import { UserResultQueryRequest } from 'src/app/model/userResultQuery.model';
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
  userAnswer: UserAnswerModel = new UserAnswerModel();
  userResult: UserResultQueryRequest = new UserResultQueryRequest();
  questions: QuestionModel[];
  min: number = 99;
  sec: number = 60;
  btn: number[] = [];
  interval: any;
  slNo: number = 1;
  display: QuestionModel;
  length: number = 0;
  subscription: any;
  score: Number;


  constructor(private router: Router, private examService: McqPortalService,) {
    this.getExamDetails();
  }



  ngOnInit(): void {

    // // this.getExamDetails();
    // window.addEventListener("keyup", disableF5);

    // window.addEventListener("keydown", disableF5);



    // function disableF5(e) {

    //   if ((e.which || e.keyCode) == 116) {
    //     e.preventDefault();
    //   }
    // };


    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "By refreshing this page you may lost all data.";
      console.log("cond");
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });

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
    history.pushState(null, null, location.href);

    this.subscription = fromEvent(window, 'popstate').subscribe(_ => {
      history.pushState(null, null, location.href);
      this.openModal(`You can't make changes or go back at this time.`, 'Okay');
    });
    window.onbeforeunload = function () { return false; }

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openModal(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.buttonMethod();
    // this.display = this.questions[0];
  }

  async onClickButton(button: number, no: Number,) {
    console.log(button);
    if (no == 1) {
      this.slNo++;
    }
    else {
      this.slNo--;
    }

    this.display = this.questions[button - 1];
  }
  async onSubmit() {
    var isConfirm = confirm("Do you want to  finish your exam?");
    if (isConfirm) {
      console.log("submitted");
      this.userResult.attemptId = this.userexamAttempt.attemptId;
      this.userResult.examId = this.examinationmodel.examinationId;
      this.userResult.userAccountId = this.userexamAttempt.accountId;
      const response: any = await this.examService.getUserResult(this.userResult).toPromise();
      console.log(response);
      // console.log(response[0].score);
      this.score = response[0].score;
      alert('YOUR SCORE IS : ' + this.score);
      // this.examService.copyScore(response[0].score);
      this.router.navigate(["/result"]);


    }
    else {
      console.log("not submitted");

    }
  }
  async onChange(Ans: any) {
    this.userAnswer.attemptId = this.userexamAttempt.attemptId;
    this.userAnswer.questionUuid = Ans.target.name;
    this.userAnswer.answerLabel = Ans.target.value;
    const response = await this.examService.saveUserResponse(this.userAnswer).toPromise();
    console.log(response);


    // console.log(Ans.target.value);
    // console.log(Ans.target.name);
    // console.log(response);


  }
  async getExamDetails() {
    //console.log(this.examService.examCode);

    const response: any = await this.examService.getExamDetail(this.examService.examCode).toPromise();
    this.examrWapper = response;
    // console.log(this.examrWapper);

    this.examinationmodel = this.examrWapper.examinationModel;
    this.userexamAttempt = this.examrWapper.userExamAttempt;
    this.questions = this.examinationmodel.questionModelList;
    //console.log(this.questions);
    this.length = this.questions.length;
    // console.log(this.length);


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
