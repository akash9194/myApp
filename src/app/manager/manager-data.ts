import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Feedback } from './manager-feedback';

export class ManagerData implements InMemoryDbService {
    createDb(){
      const feedbacks: Feedback[]=[
        { id: 1, empId: 1, empName: 'Ram', projectempName: 'Tata', rating: '1', comments: 'good',  mgrRating: '1', mgrComments: 'good'   },
        { id: 2, empId: 2, empName: 'Shyam', projectempName: 'Birla', rating: '1', comments: 'good', mgrRating: '1', mgrComments: 'good'   },
        { id: 3, empId: 3, empName: 'Mohan', projectempName: 'Tata',rating: '1', comments: 'good', mgrRating: '2',  mgrComments: 'good'   },
        { id: 4, empId: 4, empName: 'Rohan', projectempName: 'Birla', rating: '1', comments: 'good', mgrRating: '2',  mgrComments: 'good'  },
        { id: 5, empId: 5, empName: 'Sumit', projectempName: 'Tata', rating: '1', comments: 'good',mgrRating: '2',  mgrComments: 'good'   }
  
      ];
      return {feedbacks};
    }
}
