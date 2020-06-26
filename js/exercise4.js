// 4.) List all the `friends` above in reverse alphabetical order.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

let friendsArray = friends.split(',');

let friendsArraySort = friendsArray.sort();

console.log(`friends converted to array and then sorted and reversed ${friendsArraySort.reverse()}`);

/* Solution: 
friends converted to array and then sorted and reversed :
Moe,Mary,Lydia,Larry,Jane,Harriet,Grey,Emma,Elizabeth,Elinor,Darcy,Curly */