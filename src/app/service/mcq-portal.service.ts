
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
  cookies: string;
  token: string;


  constructor(private http: HttpClient) {


  }
  // getCookies(name: string) {
  //   console.log("3");

  //   this.cookies = this.cookiesService.get("JSESSIONID");
  //   console.log(this.cookies);

  // }


  readCsv(): Observable<any> {
    console.log(this.token);

    return this.http.get(`${this.baseUrl}read-csv`, { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) });
  }
  copyExamCode(exam: string) {
    this.examCode = exam;
  }
  getExamDetail(examcode: string) {
    this.examCode = examcode;
    return this.http.get(`${this.baseUrl}detail/${examcode}`, { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) });
  }
  saveUserResponse(userAnswer: UserAnswerModel) {
    console.log("saveUserResponse");
    console.log(this.token);

    return this.http.post(`${this.baseUrl}save-user-answer`, userAnswer, { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) });
  }
  getUserResult(ur: UserResultQueryRequest) {
    return this.http.post(`${this.baseUrl}result`, ur, { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) });
  }
  copyScore(score: Number) {
    this.score = score;
  }
  login() {
    return this.http.get(`${this.baseUrl}`);

  }
  sendParam(uuid: string) {
    return this.http.get(`${this.baseUrl}validate/jwt?uuid=${uuid}`, {});
  }
  getToken(token: string) {
    this.token = token;
  }
}
