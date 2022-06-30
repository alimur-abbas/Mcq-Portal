
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McqPortalService {
  private baseUrl = 'http://localhost:8080/';
  examCode: string;


  constructor(private http: HttpClient) { }
  readCsv(): Observable<any> {
    console.log("2");
    console.log(`${this.baseUrl}read-csv`);


    return this.http.get(`${this.baseUrl}read-csv`);
  }
  getExamDetail(examcode: string) {
    this.examCode = examcode;
    return this.http.get(`${this.baseUrl}detail/${examcode}`);
  }
}
