angular.module('app', [])
    .controller('AppController', function() {
        const app = this;

        app.iterations;
        app.output = '';
        app.totalChar = 0;
        app.numOutput = 1;

        app.calculateOutput = function() {
            let newOutput = '';

            if (app.iterations > 0) {
                for (let i = 0; i < app.iterations; i++) {
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

            app.totalChar += newOutput.length;

            app.output += 'Output ' + app.numOutput + ': ' + newOutput + '\n';

            app.numOutput++;
        }
    });