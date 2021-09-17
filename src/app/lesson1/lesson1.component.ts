import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lesson1',
    templateUrl: './lesson1.component.html',
    styleUrls: ['./lesson1.component.scss']
})


export class Lesson1Component implements OnInit {

    public name = 'Ivan';
    public age = 22;
    public isOnline = true;
    public users: Array<string> = ['Iryna', 'Alina', 'Olya'];
    public car = { mark: 'BMW', model: 'M5' };
    public urlName = 'google';
    public urlPath = 'https://www.google.com';

    constructor() { }

    ngOnInit(): void {
    }

    sayHello(): string {
        return 'Hello Angular';
    }

}
