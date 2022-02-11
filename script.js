const body = document.body;
const container = document.createElement("div");
container.style.width = '48vw';

function grid(n) {
    for(let i = 0; i < (n * n); i++) {
        const quotient = n / 16;
        const div = document.createElement("div");
        const width = 3 / quotient;
        const height = 5 / quotient;
        div.setAttribute('id', 'square');
        div.style.backgroundColor = 'black';
        div.style.width = width + 'vw';
        div.style.height = height + 'vh';
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
    if(numOfSquares >= 100) {
        alert("Enter a value below 100");
    }
    else {
        grid(numOfSquares);
    }
} 

function def() {
    window.location.reload();
}