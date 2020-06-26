/*
.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

```js
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

*/

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

let friendsArray = friends.split(',');

console.log(`friends converted to array and then sorted ${friendsArray.sort()}`);

// solution is : friends converted to array and then sorted Curly,Darcy,Elinor,Elizabeth,Emma,Grey,Harriet,Jane,Larry,Lydia,Mary,Moe