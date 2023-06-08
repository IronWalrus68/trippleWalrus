const win1 = 'cherry'
const win2 = 'cherry'
const win3 = 'cherry'

//1B        -               2=*5  return    3=*10 return
//2b        -               2=*10 return    3=*20 return
//3b        -               2=*20 return    3=*40 return
//cherry    1=*1 return     2=*2  return    3=*3  return.
//grape     1=*2 return     2=*4  return    3=*6  return
//walrus = walrus*3 - jackpot

if(win1 && win2 && win3 == 'cherry'){
    console.log('winner, cherry, *3 return')
} else if(win1 && win2 || win2 && win3 || win1 && win3 == 'cherry'){
    console.log('winner, cherry, *2 return')
} else if(win1 || win2 || win3 == 'cherry'){
    console.log('winner, cherry, *1 return')
} else if(win1 && win2 && win3 == 'grape'){
    console.log('winner, grape, *6 return')
} else if(win1 && win2 || win2 && win3 || win1 && win3 == 'grape'){
    console.log('winner, grape, *4 return')
} else if(win1 || win2 || win3 == 'grape'){
    console.log('winner, grape, *2 return')
} else {console.log('looser')}
// else {console.log('looser')}




























// function runTest() {
// switch (win1, win2, win3){
//     case '1bar':
//     console.log('1bar fire')
//     break;

//     case '1bar', '1bar', '1bar':
//     console.log('1bar*3 fire')
//     break;

//     case '1bar', '1bar':
//     console.log('1bar*2 fire')
//     break;

//     case '1bar':
//     console.log('1bar fire')
//     break;


//     default:
//     console.log('defult ran')
// }
// }

// function Ibar3win() {
//     runTest(win1,win2,win3)
// }
// function Ibar2win() {
//     runTest(win2,win3)
// }
// function Ibar1win() {
//     runTest(win2)
// }


function run(){
switch (true) {
  case win1 == 'cherry' && win2 == 'cherry' && win3 == 'cherry':
    console.log('winner, *3 return');
    break;
  case win1 && win2 || win2 && win3 || win1 && win3 == 'cherry':
    console.log('winner, *2 return');
    break;
  case win1 || win2 || win3 == 'cherry':
    console.log('winner, *1 return');
    break;
  default:
    console.log('loser');
}
}run()

// const cherriesCount = [win1, win2, win3].filter(win => win === 'cherry').length;

// switch (cherriesCount) {
//   case 3:
//     console.log('Winner, *3 return');
//     break;
//   case 2:
//     console.log('Winner, *2 return');
//     break;
//   case 1:
//     console.log('Winner, *1 return');
//     break;
//   default:
//     console.log('Loser');
// }

// switch (a,b,c) {
//   case a == '~' && b == '~' && c == '~':
//   score += 500
//   scoreBoard.innerHTML = score
//   console.log('worked')
//   break;
//   default: console.log('return')
// }