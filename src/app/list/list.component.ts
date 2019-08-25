import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  columnHeadings = [];
  feedBaackList;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.columnHeadings = [
      {
        heading: 'ProjectName'
      },
      { heading: 'Rating' },
      {
        heading: 'Comments'
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

   this.feedBaackList =  this.userService.feedbackList;

  }

}
