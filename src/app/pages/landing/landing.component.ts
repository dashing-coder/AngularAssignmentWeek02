import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public studentList: Card[] = [];
  public teacherList: Card[] = [];
  constructor() {
    this.studentList = this.getStudentList();
    this.teacherList = this.getTeacherList();
  }

  ngOnInit(): void {
  }
  private getStudentList(): Card[] {
    let allCard: Card[];
    allCard = [];
    allCard.push({ name: 'Anique', count: 1, subject: 'English', description: 'Great at English. Always does better in the class. Advance level of knowledge.'});
    allCard.push({ name: 'Anita', count: 2, subject: 'Math', description: 'Great at Math. Doing great and trying to be super in math. She is currently trying to be superior.'});
    allCard.push({ name: 'Rosemary', count: 1, subject: 'Science', description: 'Science? She always like practical. She is collecting some items from Great desert of California.'});
    return allCard;
  }
  private getTeacherList(): Card[] {
    let allCard: Card[];
    allCard = [];
    allCard.push({ name: 'Sayed', count: 5, subject: 'English', description: 'A great teacher to teach English. He is keeping students busy as much as possible. Sometime students fail to complete his homework.'});
    allCard.push({ name: 'Juwel', count: 2, subject: 'Math', description: 'All student like him. Some students doesn\'t to their homework at all. But the teacher is above of them. He is happy for doing nothing.'});
    allCard.push({ name: 'Chris', count: 6, subject: 'Science', description: 'He is very active for his class. He always try to show something to his students but sometimes it isn\'t possible for him to do that.'});
    return allCard;
  }

}
