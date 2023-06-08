constVReel1 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'1b',
    5:'~',
    6:'5b',
    7:'~',
    8:'1b',
    9:'~',
    10:'~',
    11:'7b',///////
    12:'~',
    13:'~',
    14:'1b',
    15:'1b',
    16:'~',
    17:'~',
    18:'5b',
    19:'~',
    20:'1b',
    21:'1b',
    22:'~',
    23:'5b',
    24:'~',
    25:'~',
    26:'Walrus',
    27:'~',
    28:'~',
    29:'1b',
    30:'1b',
    31:'~',
    32:'5b',
}
constVReel2 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'~',
    5:'~',
    6:'5b',
    7:'5b',
    8:'~',
    9:'~',
    10:'1b',
    11:'~',
    12:'~',
    13:'7b',
    14:'~',
    15:'~',
    16:'1b',
    17:'~',
    18:'5b',
    19:'~',
    20:'~',
    21:'1b',
    22:'1b',
    23:'~',
    24:'1b',
    25:'~',
    26:'~',
    27:'5b',
    28:'~',
    29:'1b',
    30:'~',
    31:'~',
    32:'Walrus',
}
constVReel3 = {
    1:'~',
    2:'~',
    3:'1b',
    4:'~',
    5:'~',
    6:'5b',
    7:'~',
    8:'~',
    9:'1b',
    10:'~',
    11:'~',
    12:'7b',
    13:'~',
    14:'~',
    15:'1b',
    16:'~',
    17:'~',
    18:'5b',
    19:'~',
    20:'~',
    21:'1b',
    22:'~',
    23:'1b',
    24:'~',
    25:'~',
    26:'5b',
    27:'~',
    28:'~',
    29:'1b',
    30:'~',
    31:'~',
    32:'Walrus',
}

function spinReels() {
  const reels1 = document.getElementById('reels1');
  const reels2 = document.getElementById('reels2');
  const reels3 = document.getElementById('reels3');
  
  reels1.innerHTML = getRandomSymbol();
  reels2.innerHTML = getRandomSymbol();
  reels3.innerHTML = getRandomSymbol();
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function isWin(a,b,c) {
  console.log(a,b,c)
if(a == 'Walrus' && b == 'Walrus' && c == 'Walrus'){
  winnerLine.innerHTML = 'Jackpot!!!' 
  lastWin.innerHTML = 'Last win: 500!!!' 
  score += 500
  scoreBoard.innerHTML = score
} else if(a == '3b' && b =='3b' && c =='3b'){
  winnerLine.innerHTML = 'Winner Winner Chicken Dinner!!'
  lastWin.innerHTML = 'Last win: 40!'
  score += 40
  scoreBoard.innerHTML = score
} else if(a == '3b' && b =='3b' || b =='3b' && c =='3b' || a == '3b' && c =='3b'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 20!'
  score += 20
  scoreBoard.innerHTML = score
}else if(a == '2b' && b =='2b' && c =='2b'){
  winnerLine.innerHTML = 'You have won'
  lastWin.innerHTML = 'Last win: 20!'
  score += 20
  scoreBoard.innerHTML = score
} else if(a == '2b' && b =='2b' || b =='2b' && c =='2b' || a == '2b' && c =='2b'){
  winnerLine.innerHTML = 'Big Winner!!'
  lastWin.innerHTML = 'Last win: 10!'
  score += 10
  scoreBoard.innerHTML = score
}else if(a == '1b' && b =='1b' && c =='1b'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 10!'
  score += 10
  scoreBoard.innerHTML = score
} else if(a == '1b' && b =='1b' || b =='1b' && c =='1b' || a == '1b' && c =='1b'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 5!'
  score += 5
  scoreBoard.innerHTML = score
} else if(a == 'Grape' && b =='Grape' && c =='Grape'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 6!'
  score += 6
  scoreBoard.innerHTML = score
} else if(a == 'Grape' && b =='Grape' || b =='Grape' && c =='Grape' || a == 'Grape' && c =='Grape'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 4!'
  score += 4
  scoreBoard.innerHTML = score
} else if(a == 'Grape' || b == 'Grape' || c == 'Grape'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 2!'
  score += 2
  scoreBoard.innerHTML = score
} else if(a == 'Cherry' && b =='Cherry' && c =='Cherry'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 3!'
  score += 3
  scoreBoard.innerHTML = score
} else if(a == 'Cherry' && b =='Cherry' || b =='Cherry' && c =='Cherry' || a == 'Cherry' && c =='Cherry'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 2!'
  score += 2
  scoreBoard.innerHTML = score
} else if(a == 'Cherry' || b == 'Cherry' || c == 'Cherry'){
  winnerLine.innerHTML = 'Winner!!'
  lastWin.innerHTML = 'Last win: 1!'
  score += 1
  scoreBoard.innerHTML = score
} else {
  looser()
}
}