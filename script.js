const body = document.body;
const container = document.createElement("div");
container.setAttribute('class', 'container');

function grid(n) {
    for(let i = 0; i < (n * n); i++) {
        const quotient = n / 16;
        const div = document.createElement("div");
        const width = 2.88 / quotient;
        const height = 2.704 / quotient;
        div.style.backgroundColor = 'black';
        div.style.width = width + 'rem';
        div.style.height = height + 'rem';
        div.style.float = 'left';
        container.append(div);
    }
    body.append(container);
    
    container.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "red";
    });
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

def();