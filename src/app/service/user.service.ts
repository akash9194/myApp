import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../manager/manager-feedback';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = 'api/feedbacks';
  feedbackList;
  projects = [
    {
      name: 'Tata', value: 'Tata'

    },
    {
      name: 'Birla', value: 'Birla'
    }
  ];
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.projects;
  }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiurl);
  }

  deleteManagerFeedback(id): Observable<Feedback[]> {
     const apiUrl = this.apiurl + '/' + id;
    return this.http.delete<Feedback[]>(apiUrl, this.httpOptions);
  }

  updateFeedback(feedback): Observable<Feedback> {
    const apiUrl = `${this.apiurl}/${feedback.id}`;
    return this.http.put<Feedback>(apiUrl, feedback, this.httpOptions);
  }
}
