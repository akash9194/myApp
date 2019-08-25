import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  projectList = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      empName: new FormControl('', Validators.required),
      empId: new FormControl('', Validators.required),
      project: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      commnets: new FormControl('', Validators.required),
    });

    this.projectList = this.userService.getProjects();
  }

  cancel() {
    this.feedbackForm.reset();
  }

  submit() {
    const feedbackForm = this.feedbackForm.value;

    this.userService.feedbackList = feedbackForm;
    console.log(feedbackForm);

  }
}
