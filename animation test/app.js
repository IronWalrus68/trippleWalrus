const symbols = ['~', '1b', '~', '2b', '~', '3b', '~', 'Grape', '~', 'Cherry', '~', '1b', '~', '2b', '~', '3b', '~', 'Grape', '~', 'cherry', '~', 'walrus'];
let reelAnimation1 = Array.from(document.querySelectorAll('.reelAnimation1'))
    let count = 0


function genSpins(num = 21) {
    const newNum = Math.floor(Math.random() * num);
    // console.log(newNum);
    return newNum;
}


function spinReels() {
    for(let i = 0; i <= genSpins(10); i++){
   spinAnimation1(count);
   }
    // console.log(i)
}



async function spinAnimation1(x) {
    //loop here???
    if(x >= 21){ 
        count = 0}
        
    function aaah(){ (reelAnimation1[2].innerHTML = reelAnimation1[1].innerHTML)}
    reelAnimation1[1].innerHTML = reelAnimation1[0].innerHTML
    
    reelAnimation1[0].innerHTML = symbols[x]
    count = count +=1
console.log(count, reelAnimation1[0].innerHTML)
    }
