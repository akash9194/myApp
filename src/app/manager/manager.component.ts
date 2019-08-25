import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Feedback } from './manager-feedback';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styles: []
})
export class ManagerComponent implements OnInit {

  columnHeadings = [];
  feedBaackList;
  managerFeedbackList: Feedback[];
  mgrRating;
  mgrCommnts;
  updateForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.columnHeadings = [
      {
        heading: 'EmpId'
      },
      { heading: 'EmpName' },
      {
        heading: 'ProjectName'
      },
      {
        heading: 'rating'
      },
      {
        heading: 'comments'
      },
      {
        heading: 'mgrRating'
      },
      {
        heading: 'mgrComments'
      },
      {
        heading: 'Action'
      },
    ];
    this.updateForm = new FormGroup({
      mgrRating: new FormControl ('', Validators.required),
      mgrCommnts: new FormControl ('', Validators.required),
  });
    this.getFeedbacks();

  }

  getFeedbacks() {
    this.userService.getFeedbacks().subscribe(resp => {
      console.log(resp);
      this.managerFeedbackList = resp;

    });

  }

  deleteFeedback(id) {
    this.userService.deleteManagerFeedback(id).subscribe(resp => {

    });
  }

  updateFeedback(feedbackData) {
    const updateForm = this.updateForm.value;
    if (updateForm.mgrRating !== '' && updateForm.mgrCommnts !== '' && updateForm.mgrRating !== null && updateForm.mgrCommnts !== null) {
      feedbackData.mgrRating = updateForm.mgrRating;
      feedbackData.mgrComments = updateForm.mgrCommnts;
      this.userService.updateFeedback(feedbackData).subscribe(resp => {
        this.getFeedbacks();
      });
    }
  }
}
