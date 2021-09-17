import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    parentMessage!: string;
    receivedData!: string;
    title = 'AngularIntro';

    send(): void {
        this.parentMessage = (<HTMLInputElement>document.querySelector('#parentMessage')).value;
    }
    receiveDataFromBelow(data: string): void {
        this.receivedData = data;
    }

}
