//Object1
//prints 8 & 1846
//2
//prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//3
//Your name is Alejandro and you like purple.
//your name is Melissa and you like green.
//Your name is undefined and you like green.

//Array1
//Maya
//Marisa
//Chi
//2
//Raindrops on roses
//whiskers on kittens
//[Bright copper kettles",warm woolen mittens, Brown paper packages tied up with strings]
//3
//[10,30,20]

//
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  const {a,b} = obj.numbers;

  //

  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0],arr[1]]= [arr[1],arr[0]];

//
let list = (['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
const raceResults = ([first,second,third,...rest]) =>({first,second,third,rest});
console.log(raceResults(list));

