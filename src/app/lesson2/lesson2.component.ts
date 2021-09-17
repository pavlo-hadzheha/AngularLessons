import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lesson2',
    templateUrl: './lesson2.component.html',
    styleUrls: ['./lesson2.component.scss']
})

export class Lesson2Component implements OnInit {
    visible = false;
    arrNames: string[] = ['Alina', 'Iryna', 'Oksana'];
    input!: string;
    isEdit: boolean = false;
    editIndex!: number;
    constructor() { }

    ngOnInit(): void {
    }
    toggleVisible(): void {
        this.visible = !this.visible;
    }
    addUser(): void {
        if(this.input) {
            this.arrNames.push(this.input);
            this.input = '';
        }
    }
    deleteUser(index: number | string): void {
        this.arrNames.splice(+index, 1);
    }
    editUser(index: number): void {
        this.isEdit = true;
        this.editIndex = index;
        this.input = this.arrNames[+index];
    }
    saveChanges(): void {
        if(this.input) {
            this.arrNames.splice(this.editIndex, 1, this.input);
            this.isEdit = false;
        }
    }
}
