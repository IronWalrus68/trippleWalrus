const symbols = ['~', '1b', '~', '2b', '~', '3b', '~', 'Grape', '~', 'Cherry', 
'~', '1b', '~', '2b', '~', '3b', '~', 'Grape', '~', 'cherry', '~', 'walrus']; // Replace with actual symbols
//THIS/\ is what the machine will cycle thought when the button is pressed.

//1B        -               2=*5  return    3=*10 return
//2b        -               2=*10 return    3=*20 return
//3b        -               2=*20 return    3=*40 return
//cherry    1=*1 return     2=*2  return    3=*3  return.
//grape     1=*2 return     2=*4  return    3=*6  return
//walrus = walrus*3 - jackpot               3=*500 return
const reels1 = document.getElementById('reels1');
const reels2 = document.getElementById('reels2');
const reels3 = document.getElementById('reels3');

let scoreBoard = document.querySelector('.score');
let score = 100

let winnerLine = document.querySelector('#winnerLine');
let lastWin = document.querySelector('#lastWin');

scoreBoard.innerHTML = score

function rand(num = 10) {
    const newNum = Math.floor(Math.random() * num) + 1;
    // console.log(newNum);
    return newNum;
}
function rand0(num = 10) {
    const newNum = Math.floor(Math.random() * num);
    // console.log(newNum);
    return newNum;
}
const VReel1 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'2b',
    5:'~',
    6:'Cherry',
    7:'~',
    8:'3b',
    9:'~',
    10:'~',
    11:'Grape',
    12:'~',
    13:'~',
    14:'1b',
    15:'2b',
    16:'~',
    17:'~',
    18:'Cherry',
    19:'~',
    20:'1b',
    21:'3b',
    22:'~',
    23:'Cherry',
    24:'~',
    25:'~',
    26:'Walrus',
    27:'~',
    28:'~',
    29:'1b',
    30:'1b',
    31:'~',
    32:'Cherry',
}
const VReel2 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'~',
    5:'~',
    6:'Cherry',
    7:'Cherry',
    8:'~',
    9:'~',
    10:'2b',
    11:'~',
    12:'~',
    13:'Grape',
    14:'~',
    15:'~',
    16:'3b',
    17:'~',
    18:'Cherry',
    19:'~',
    20:'~',
    21:'1b',
    22:'2b',
    23:'~',
    24:'3b',
    25:'~',
    26:'~',
    27:'Cherry',
    28:'~',
    29:'1b',
    30:'~',
    31:'~',
    32:'Walrus',
}
const VReel3 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'~',
    5:'~',
    6:'Cherry',
    7:'~',
    8:'~',
    9:'2b',
    10:'~',
    11:'~',
    12:'Grape',
    13:'~',
    14:'~',
    15:'3b',
    16:'~',
    17:'~',
    18:'Cherry',
    19:'~',
    20:'~',
    21:'1b',
    22:'~',
    23:'2b',
    24:'~',
    25:'~',
    26:'Cherry',
    27:'~',
    28:'~',
    29:'3b',
    30:'~',
    31:'~',
    32:'Walrus',
}

function pay() {
  score -= 1;
  scoreBoard.innerHTML = score
}
function isWin(a, b, c) {
  console.log(a, b, c);
  switch (true) {
    case a === 'Walrus' && b === 'Walrus' && c === 'Walrus':
      winnerLine.innerHTML = 'Jackpot!!!';
      lastWin.innerHTML = 'Last win: 500!!!';
      score += 500;
      scoreBoard.innerHTML = score;
      break;

    case a === '3b' && b === '3b' && c === '3b':
      winnerLine.innerHTML = 'Winner Winner Chicken Dinner!!';
      lastWin.innerHTML = 'Last win: 40!';
      score += 40;
      scoreBoard.innerHTML = score;
      break;

    case (a === '3b' && b === '3b') || (b === '3b' && c === '3b') || (a === '3b' && c === '3b'):
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 20!';
      score += 20;
      scoreBoard.innerHTML = score;
      break;

    case a === '2b' && b === '2b' && c === '2b':
      winnerLine.innerHTML = 'You have won';
      lastWin.innerHTML = 'Last win: 20!';
      score += 20;
      scoreBoard.innerHTML = score;
      break;

    case (a === '2b' && b === '2b') || (b === '2b' && c === '2b') || (a === '2b' && c === '2b'):
      winnerLine.innerHTML = 'Big Winner!!';
      lastWin.innerHTML = 'Last win: 10!';
      score += 10;
      scoreBoard.innerHTML = score;
      break;

    case a === '1b' && b === '1b' && c === '1b':
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 10!';
      score += 10;
      scoreBoard.innerHTML = score;
      break;

    case (a === '1b' && b === '1b') || (b === '1b' && c === '1b') || (a === '1b' && c === '1b'):
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 5!';
      score += 5;
      scoreBoard.innerHTML = score;
      break;

    case a === 'Grape' && b === 'Grape' && c === 'Grape':
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 6!';
      score += 6;
      scoreBoard.innerHTML = score;
      break;

    case (a === 'Grape' && b === 'Grape') || (b === 'Grape' && c === 'Grape') || (a === 'Grape' && c === 'Grape'):
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 4!';
      score += 4;
      scoreBoard.innerHTML = score;
      break;

    case a === 'Grape' || b === 'Grape' || c === 'Grape':
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 2!';
      score += 2;
      scoreBoard.innerHTML = score;
      break;

    case a === 'Cherry' && b === 'Cherry' && c === 'Cherry':
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 3!';
      score += 3;
      scoreBoard.innerHTML = score;
      break;

    case (a === 'Cherry' && b === 'Cherry') || (b === 'Cherry' && c === 'Cherry') || (a === 'Cherry' && c === 'Cherry'):
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 2!';
      score += 2;
      scoreBoard.innerHTML = score;
      break;

    case a === 'Cherry' || b === 'Cherry' || c === 'Cherry':
      winnerLine.innerHTML = 'Winner!!';
      lastWin.innerHTML = 'Last win: 1!';
      score += 1;
      scoreBoard.innerHTML = score;
      break;

    default:
      looser();
      break;
  }
}

//3 var are needed, one for each real, they are to pull a random symbal from the virual table then display them in the wheel after


function looser(){
  console.log('looser')
  lineRNum = rand(15)
  switch (lineRNum){
    case 1:
    winnerLine.innerHTML = 'looser'
    break
    case 2:
    winnerLine.innerHTML = 'looser'
    break
    case 3:
    winnerLine.innerHTML = 'try again'
    break
    case 4:
    winnerLine.innerHTML = 'begambleaware.org for help'
    break
    case 5:
    winnerLine.innerHTML = 'looser'
    break
    case 6:
    winnerLine.innerHTML = 'better luck next time'
    break
    case 7:
    winnerLine.innerHTML = 'gambling is a sickness. Get help.'
    break
    case 8:
    winnerLine.innerHTML = 'try again'
    break
    case 9:
    winnerLine.innerHTML = 'you have lost'
    break
    case 10:
    winnerLine.innerHTML = 'try again'
    break
    case 11:
    winnerLine.innerHTML = 'looser'
    break
    case 12:
    winnerLine.innerHTML = 'Big looser'
    break
    case 13:
    winnerLine.innerHTML = 'looser'
    break
    case 14:
    winnerLine.innerHTML = 'looser'
    break
    case 15:
    winnerLine.innerHTML = 'looser'
    break
  }
}

function spinReels() { 
  if(score <= 0){
    console.log('outta mad chedder')
    return
  }
  pay()
  const spinReel1 = rand(32)
  const spinReel2 = rand(32)
  const spinReel3 = rand(32)
  // console.log(VReel1[spinReel1])
  // console.log(VReel2[spinReel2])
  // console.log(VReel3[spinReel3])
  reels1.innerHTML = VReel1[spinReel1];
  reels2.innerHTML = VReel2[spinReel2];
  reels3.innerHTML = VReel3[spinReel3];
  isWin(reels1.innerHTML,reels2.innerHTML,reels3.innerHTML)
  console.log(`score: ${score}`)
}
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    spinReels()
  }
}

function testPlay(e = 10) {
  for (let i = 1; i<= e; i++){
    spinReels()
    console.log(e)
    if(winnerLine == 'Jackpot!!!'){
      break
    }
  }
}