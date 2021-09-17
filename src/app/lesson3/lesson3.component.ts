import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  @Input() childMessage!: string;
  @Output() outputData = new EventEmitter<string>(true);
  @Output() outputCounter = new EventEmitter<string>(true);
  preOutputData!: string;
  counter: number = 0;

  arrUsers: Array<IUser> = [
    {
      name: 'Ivan',
      age: 22,
      status: false,
    },
    {
      name: 'Petro',
      age: 18,
      status: true,
    },
    {
      name: 'Alina',
      age: 21,
      status: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(user: IUser): void {
    user.status = !user.status;
  }

  sendDataUpward(): void {
    this.outputData.emit(this.preOutputData);
  }

  increment(up: boolean = true, event: Event): void {
    console.log(event);
    if(up) {
      this.outputCounter.emit(JSON.stringify(++this.counter));
    } else {
      this.outputCounter.emit(JSON.stringify(--this.counter));
    }
  }
}
