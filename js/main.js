const container = document.getElementById('container');

const button = document.getElementById('my_button');

const selection = document.getElementById('selection');

const points = document.getElementById('points');

let bombs = [];

button.addEventListener('click', function () {
    console.clear();
    document.getElementById('container').style.display = 'flex';

    container.innerHTML = null;

    points.style.display = 'none';

    if (selection.value == 0) {
        bombs = generateRandomNumber(49);
        let stop = false;
        let win = false;
        let counter = 0;
        for (let i = 0; i < 49; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_1');

            if (bombs.includes(i)) {
                newSquare.classList.add('bomb');
            }

            newSquare.addEventListener('click', function () {
                if (!stop && !win) {
                    if (newSquare.classList.contains('bomb')) {
                        newSquare.classList.add('bomb_active');
                        stop = true;
                        console.log('HAI PERSO!');
                        points.innerHTML = `HAI PERSO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    } else {
                        newSquare.classList.add('activated');

                        console.log(newSquare.innerHTML);
                        counter++;
                    }
                    if (counter == (49 - 16)) {
                        win = true;
                        console.log('HAI VINTO!');
                        points.innerHTML = `HAI VINTO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    }
                }
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }

    if (selection.value == 1) {
        bombs = generateRandomNumber(81);
        let stop = false;
        let win = false;
        let counter = 0;
        for (let i = 0; i < 81; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_2');

            if (bombs.includes(i)) {
                newSquare.classList.add('bomb');
            }

            newSquare.addEventListener('click', function () {
                if (!stop && !win) {
                    if (newSquare.classList.contains('bomb')) {
                        newSquare.classList.add('bomb_active');
                        stop = true;
                        console.log('HAI PERSO!');
                        points.innerHTML = `HAI PERSO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    } else {
                        newSquare.classList.add('activated');

                        console.log(newSquare.innerHTML);
                        counter++;
                    }
                    if (counter == (81 - 16)) {
                        win = true;
                        console.log('HAI VINTO!');
                        points.innerHTML = `HAI VINTO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    }
                }
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }

    if (selection.value == 2) {
        bombs = generateRandomNumber(100);
        let stop = false;
        let win = false;
        let counter = 0;
        for (let i = 0; i < 100; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_3');

            if (bombs.includes(i)) {
                newSquare.classList.add('bomb');
            }

            newSquare.addEventListener('click', function () {
                if (!stop && !win) {
                    if (newSquare.classList.contains('bomb')) {
                        newSquare.classList.add('bomb_active');
                        stop = true;
                        console.log('HAI PERSO!');
                        points.innerHTML = `HAI PERSO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    } else {
                        newSquare.classList.add('activated');

                        console.log(newSquare.innerHTML);
                        counter++;
                    }
                    if (counter == (100 - 16)) {
                        win = true;
                        console.log('HAI VINTO!');
                        points.innerHTML = `HAI VINTO! PUNTEGGIO: ${counter}`;
                        points.style.display = 'block';
                    }
                }
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }
});

// FUNCTIONS

function generateNewSquare() {
    const square = document.createElement('div');
    square.classList.add('square', 'flex_container');
    return square;
}

function generateRandomNumber(size) {
    let i = 0;
    let num = 0;
    const array = [];

    while (i < 16) {
        num = Math.floor(Math.random() * size);
        if (!array.includes(num)) {
            array.push(num);
            i++;
        }
    }
    return array;
}