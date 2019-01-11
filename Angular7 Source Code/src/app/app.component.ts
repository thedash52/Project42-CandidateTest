import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Candidate Test for Project42 - Angular7';

    iterations: number;
    output = '';
    totalChar = 0;
    numOutput = 1;

    constructor() { }

    ngOnInit() {

    }

    calculateOutput() {
        let newOutput = '';

        if (this.iterations > 0) {
            for (let i = 0; i < this.iterations; i++) {
                const threeMultiplyer = (i + 1) % 3;
                const fiveMultiplyer = (i + 1) % 5;

                if (threeMultiplyer === 0 && fiveMultiplyer === 0) {
                    newOutput += 'HeyHoo';
                } else if (threeMultiplyer === 0) {
                    newOutput += 'Hey';
                } else if (fiveMultiplyer === 0) {
                    newOutput += 'Hoo';
                } else {
                    newOutput += '>';
                }
            }
        } else {
            alert('Please enter a number above 0');
        }

        this.totalChar += newOutput.length;

        this.output += 'Output ' + this.numOutput + ': ' + newOutput + '\n';

        this.numOutput++;
    }
}
