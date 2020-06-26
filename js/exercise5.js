//5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.


var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

let combinedArray = myFriends.concat(yourFriends);

console.log(`combined array ${combinedArray.sort()}`);

/*
solution: 
combined array Bilbo,Boromir,Elrond,Faramir,Frodo,Gandalf,Hodor,Jojen,
Jon,Jory,Legolas,Maester,Meera,Osha,Pippin,Rickard,Rickon,Rodrik,Septa
*/