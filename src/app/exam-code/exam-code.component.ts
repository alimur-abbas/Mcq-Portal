import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExaminationModel } from '../model/examination.model';
import { QuestionModel } from '../model/question.model';
import { UserExamAttempt } from '../model/userExamAttempt.model';
import { UserExamAttemptWrapper } from '../model/userExamAttemptWrapper.model';
import { McqPortalService } from '../service/mcq-portal.service';


@Component({
  selector: 'app-exam-code',
  templateUrl: './exam-code.component.html',
  styleUrls: ['./exam-code.component.css']
})
export class ExamCodeComponent implements OnInit {
  examrWapper: UserExamAttemptWrapper = new UserExamAttemptWrapper();
  examinationmodel: ExaminationModel = new ExaminationModel();
  userexamAttempt: UserExamAttempt = new UserExamAttempt();
  questionModel: QuestionModel[];
  isClicked = false;

  constructor(private examService: McqPortalService, private router: Router) { }

  ngOnInit(): void {
  }
  async getExamDetails(examcode: string) {
    const response: any = await this.examService.getExamDetail(examcode).toPromise();
    console.log(response);
    this.isClicked = true;

    // console.log(examcode);

    setTimeout(() => {                           // <<<---using ()=> syntax
      this.router.navigate(["/question"]);
    }, 3000);


    // await this.examService.getExamDetail(examcode).subscribe((data: any) => {
    // this.examrWapper = response;
    //   console.log(data);
    //   this.examinationmodel = data.examinationModel;
    //   console.log(this.examinationmodel);


    // })
    this.examinationmodel = response.examinationModel;
    // console.log(this.examinationmodel);


    this.questionModel = response.examinationModel.questionModelList;
    // console.log(this.questionModel);

    this.userexamAttempt = response.userExamAttempt;
  }


}


