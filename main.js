////////////////////////////////
// Easy Going

for(let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log('------------------------------------');
////////////////////////////////


////////////////////////////////
// Get Even
for(let i = 0; i <= 200; i++) {
  if(i % 2 === 0) {
    console.log(i)
  }
}
console.log('------------------------------------');
////////////////////////////////


////////////////////////////////
// Fizz Buzz
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  }
  if(i % 3 === 0) {
    console.log('Fizz')
  }
  if(i % 5 === 0) {
    console.log('Buzz')
  }
}
console.log('------------------------------');
////////////////////////////////


////////////////////////////////
// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
wolfy[3] = 'Gotham City'
dart.push('Hawkins')
wolfy[0] = 'Gameboy'
console.log(`wolfy [${wolfy}]`);
console.log(`sharky [${sharky}]`);
console.log(`plantee [${plantee}]`);
console.log(`porgee [${porgee}]`);
console.log(`dart [${dart}]`);
console.log('------------------------------')
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for(const turtle of turtles) {
  console.log(turtle.toUpperCase());
}
console.log('------------------------------')
////////////////////////////////


////////////////////////////////
// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

let titanic = favMovies.indexOf('Titanic')
console.log(titanic);

favMovies.sort()
console.log(favMovies);

favMovies.pop()
console.log(favMovies);

favMovies.push("Guardians of the Galaxy")
console.log(favMovies);

favMovies.reverse()
console.log(favMovies);

favMovies.shift()
console.log(favMovies);

favMovies.unshift('Ray J')
console.log(favMovies);

let avatar = favMovies.indexOf('Django Unchained')
favMovies.splice(15, 1, 'Avatar')
console.log(favMovies);


const fave = favMovies.slice(favMovies.length / 2)
console.log(fave);

let fast = favMovies.indexOf('Fast and Furious')
console.log(fast);
// -1 for something not found in index of
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////