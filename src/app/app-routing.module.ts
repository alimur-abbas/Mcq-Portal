import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExamCodeComponent } from './components/exam-code/exam-code.component';
import { ResultComponent } from './components/result/result.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "examcode", component: ExamCodeComponent },
  { path: "result", component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
