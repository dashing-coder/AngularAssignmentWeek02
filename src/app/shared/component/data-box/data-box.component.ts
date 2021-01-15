import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent implements OnInit {

  @Input() dataBox: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
