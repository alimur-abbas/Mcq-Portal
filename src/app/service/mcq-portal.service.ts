
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAnswerModel } from '../model/userAnswer.model';
import { UserResultQueryRequest } from '../model/userResultQuery.model';

@Injectable({
  providedIn: 'root'
})
export class McqPortalService {
  private baseUrl = 'http://localhost:8080/';
  examCode: string;
  score: Number;


  constructor(private http: HttpClient) { }
  readCsv(): Observable<any> {
    console.log("2");
    console.log(`${this.baseUrl}read-csv`);


    return this.http.get(`${this.baseUrl}read-csv`, { headers: new HttpHeaders().set("Access-Control-Allow-Origin", "http://localhost:4200") })
  }
  copyExamCode(exam: string) {
    this.examCode = exam;
  }
  getExamDetail(examcode: string) {
    this.examCode = examcode;
    return this.http.get(`${this.baseUrl}detail/${examcode}`);
  }
  saveUserResponse(userAnswer: UserAnswerModel) {
    return this.http.post(`${this.baseUrl}save-user-answer`, userAnswer);
  }
  getUserResult(ur: UserResultQueryRequest) {
    return this.http.post(`${this.baseUrl}result`, ur);
  }
  copyScore(score: Number) {
    this.score = score;
  }
  login() {
    return this.http.get(`${this.baseUrl}`);

  }
}
