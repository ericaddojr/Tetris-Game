document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div")); //query selector functions exactly as getElementById in this program.
    const ScoreDisplay = document.querySelector("#score");
    const StartBtn = document.querySelector("#start-button");
    const width = 10;


const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+1]
]

const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width,width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ]

const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ]

  const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width* 2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]

 

  const iTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2 + 1, width*3+1],
    [width, width+1, width+2, width+3]
  ]


  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


  let currentPosition = 3;
  let random = Math.floor(Math.random()*theTetrominoes.length);
  console.log(random)
  let current = theTetrominoes[0][0];


  //Below adds the tetromino
  function draw(){
    current.forEach(index => {
        squares[currentPosition + index].classList.add("tetromino")
    });
  }

//Below removes the tetromino
  function undraw(){
    current.forEach(index => {
        squares[currentPosition + index].classList.remove("tetromino")
    });
  }
//Make the tetrominoes move down every second
 timerId = setInterval(moveDown, 1000);

  function moveDown(){
    undraw();
    currentPosition += width;
    draw()
  }

// ++EAJ++



})
