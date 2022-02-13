const body = document.body;
const container = document.createElement("div");
container.setAttribute('class', 'container');

function grid(n) {
    for(let i = 0; i < (n * n); i++) {
        const quotient = n / 16;
        const div = document.createElement("div");
        const width = 2.16 / quotient;
        const height = 2.028 / quotient;
        div.style.backgroundColor = 'white';
        div.style.width = width + 'rem';
        div.style.height = height + 'rem';
        div.style.float = 'left';
        container.append(div);
    }
    body.append(container);
}

function numOfSquares(){
    const numOfSquares = prompt("Enter no. of squares per side for new grid: ");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    if(numOfSquares >= 100) {
        alert("Enter a value below 100");
    }
    else {
        grid(numOfSquares);
    }
} 

function def() {
    grid(16);
}

function black() {
    container.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "black";
    });
}

function rgb() {
    container.addEventListener("mouseover", function( event ) {
        let Rnum = Math.floor(Math.random() * 255);
        let Gnum = Math.floor(Math.random() * 255);
        let Bnum = Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = `rgb(${Rnum}, ${Gnum}, ${Bnum})`;
    });
}

black();

def();