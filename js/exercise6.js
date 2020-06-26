// 6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, 
//then how would you find the rank of another food? Try finding the rank of `Pho`.


var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

let rankOfPho = foods.indexOf('Pho');
console.log(`Rank of pho is ${rankOfPho+1} and index is ${rankOfPho}`);