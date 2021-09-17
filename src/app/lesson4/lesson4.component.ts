import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {

  public userName = 'iVaN IVANOV';
  public price = 1099.99;
  public today = new Date(2021, 8, 17, 20, 6, 0);
  public arrNames: Array<string> = ['Petro', 'Ivan', 'Alina', 'Maria', 'Iryna', 'Andriy', 'Pavlo', 'Artur'];
  public field = ``;
  public isSorted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  sort(): string {
    if(this.isSorted){
      return 'sort';
    } else {
      return '';
    }
  }

}
