

let generatorArray = (n,m, count) => {
  let array = [];

  for(let i = 0; i < count; i++) {

    let num = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m)
    if(num <= m && num >= n || n>m) array.push(num)
  }


  console.log(array)
}


console.log("quest one: ")
generatorArray(0, 100, 100)
generatorArray(2,5,50)
generatorArray(100,-5,70)
generatorArray(-3,-10,42)


let reversArray = (str) => {
  let elem = "";

  for(let i = 0, k = str.length; i <= str.length; i++, k--) {
    if (str[k] !== undefined) {
      elem += str[k]
    }
  }

  console.log(elem)

}

console.log("quest two: ")
reversArray("Hello world")
reversArray("Cool trening")


function game () {

    let roadMines = [false, true, false, false, true, true, false, true, true, true];
    //true - это мина
    let a = 0;
    for (let i = 0; i < roadMines.length; i++) {
        if (roadMines[i]) {
            a++;
            if(a == 1) {
                console.log(`Танк переместился на ${i}, так поврежден`)
            } else if (a == 2) {
                console.log(`Танк остановился на позиции ${i}, танк уничтожен`)
                break;
            }
        } else {
            console.log(`Танк переместился на ${i} позицию`)
        }
    }
}

console.log("quest 3: ")
game()


function calendar (week) {

    let arrNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let daynedely = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];

    let a = daynedely.indexOf(week.toLowerCase());
    console.log(a)

    for(let i = 1; i < arrNumber.length; i++) {
      console.log(`${i} января, ${daynedely[a%7]} день недели`)
      a++
    }
}

console.log("quest 4: ")
calendar("понедельник")
