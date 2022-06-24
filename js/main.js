const container = document.getElementById('container');

const button = document.getElementById('my_button');

const selection = document.getElementById('selection');

function generateNewSquare() {
    const square = document.createElement('div');
    square.classList.add('square', 'flex_container');
    return square;
}

button.addEventListener('click', function () {
    document.getElementById('container').style.display = 'flex';

    container.innerHTML = null;

    if (selection.value == 0) {
        for (let i = 0; i < 49; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_1');

            newSquare.addEventListener('click', function () {
                newSquare.classList.add('activated');

                console.log(newSquare.innerHTML);
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }

    if (selection.value == 1) {
        for (let i = 0; i < 81; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_2');

            newSquare.addEventListener('click', function () {
                newSquare.classList.add('activated');

                console.log(newSquare.innerHTML);
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }

    if (selection.value == 2) {
        for (let i = 0; i < 100; i++) {
            const newSquare = generateNewSquare();
            newSquare.classList.add('size_3');

            newSquare.addEventListener('click', function () {
                newSquare.classList.add('activated');

                console.log(newSquare.innerHTML);
            });

            newSquare.innerHTML = i + 1;

            container.append(newSquare);
        }
    }
});