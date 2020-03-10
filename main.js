//Filter

// filter 1
let filter1 = [];
filter1 = inventors.filter((name) => name.charAt(0) == "A");
console.log("Result of filter1:", filter1);

// filter 2
let filter2 = [];
filter2 = inventors.filter((name) => name.includes('n'));
console.log("Result of filter2:", filter2);

//filter 3
let filter3 = [];
let check = function(character) {
  for (let i = 0; i < character.length; i++) {
    if (character[i] == character[i+1]) {
      return true;
    }
  }
}
filter3 = inventors.filter(check);
console.log("Result of filter3:", filter3);

// filter 3 (Bitna)

inventors.filter((name) => {
  let splitName = inventors.split('');
  let isDuplicate = false;
  splitName.map((_,i) => {
    if (splitName[i] === splitName[i+1]) {
      isDuplicate = true;
    }
    return isDuplicate
  })
  return isDuplicate
})

//filter 4
let filter4 = [];
filter4 = numbers.filter((number) => number % 2 == 1);
console.log("Result of filter4:", filter4);

// filter 5
let filter5 = [];
filter5 = numbers.filter((number) => number <= 99 && number >=10);
console.log("Result of filter5:", filter5);

//filter 6
let filter6 = [];
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
filter6 = numbers.filter(isPrime);
console.log("Result of filter6:", filter6);


//MAP
//map 1
let map1 = [];
map1 = inventors.map((name) => name.substring(0,name.indexOf(' ')));
console.log("Result of map1:", map1);

//map 2
let map2 = [];
map2 = inventors.map((name) => name.length);
console.log("Result of map2:", map2);

//map 3
let map3 = [];
map3 = inventors.map((name) => name.toUpperCase());
console.log("Result of map3:", map3);

//map 4 
let map4 = [];
let printInitial = function(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] == name[i].toUpperCase() && name[i] != ' ' && name[i] != '.')
    return name[i]
  }
}
map4 = inventors.map((name) => name.split('').filter(printInitial).join('.'));
console.log("Result of map4:", map4);

// map 4 (bitna)

inventors.map((name) => {
  let splitName = inventors.split(' ');
  return splitName.reduce((total, eachname) => {
    total += eachname.charAt(0);
    return total;
  },'')
})

//map 5
let map5 = [];
map5 = numbers.map((number) => number*100);
console.log("Result of map5:", map5);

//Map 6

let pow = [];
for (i = 1; i <= 5; i++) {
  pow.push(Math.pow(2, i))
}
console.log(pow);


// SORT 
// sort 1
let sort1 = [];
sort1 = inventors.sort();
console.log("Result of sort1:", sort1);

// sort 2
let sort2 = [];
sort2 = inventors.sort((a,b) => a<b ? 1 : -1);
console.log("Result of sort2:", sort2);

// sort 3 
let sort3 = [];
sort3 = inventors.sort((a,b) => a.length < b.length ? -1 : 1)
console.log("Result of sort3:", sort3);

// sort 4
let sort4 = [];
sort4 = inventors.sort((a,b) => a.length < b.length ? 1 : -1)
console.log("Result of sort3:", sort4);


// REDUCE
// Reduce 1
let reduce1 = []
reduce1 = numbers.reduce((total, num) => total += num);
console.log("Result of reduce1:", reduce1);

// Reduce 2
let reduce2 = []
reduce2 = numbers.filter((num) => num % 2 == 0).reduce((total, num) => total += num);
console.log("Result of reduce2:", reduce2);

// Reduce 3
let reduce3 = []
reduce3 = inventors.map((name) => name.substring(0,name.indexOf(' '))).reduce((total, num) => {
  total += num;
  return total;
});
console.log("Result of reduce3:", reduce3);

// Reduce 3
inventors.reduce((total, name) => {
  let firstName = name.substring(0,name.indexOf(' '));
  total += firstName;
  return total
},'')

// Some / every
// SE 1
let isHasY = []
isHasY = inventors.some((name) => name.includes('y'));
console.log("Result of SE1:", isHasY);

// SE 2
let isHasE = []
isHasE = inventors.every((name) => name.includes('e'));
console.log("Result of SE2:", isHasE);

// SE 3
let firstName = []
firstName = inventors.map((name) => name.substring(0, name.indexOf(' '))).every((name) => name.length >4)
console.log("Result of SE3:", firstName);

// Find 1
let find1 = []
find1 = inventors.find((name) => name.split(" ").length >2 );
console.log("Result of Find1:", find1); 

// Find 2
let find2 = []
let firstLastName = []
find2 = inventors.findIndex((name) => name.split(" ").length >2 );
inventors.splice(find2, 1);
console.log("Result of Find2:", find2, inventors); 

// Find 3
let find3 = []
find3 = numbers.find((number) => number % 7 == 0);
console.log("Result of Find3:", find3);

// Find 4
let find4 = []
find4 = numbers.findIndex((number) => number % 7 == 0);
numbers.splice(find4, 1)
console.log("Result of Find4:", find4, numbers);