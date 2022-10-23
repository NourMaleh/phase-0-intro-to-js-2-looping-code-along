


function writeCards(names,event) {
  const cards=[ ]
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}
writeCards(['Guadalupe', 'Ollie', 'Aki'], "surprise");


function countDown(){
  let i = 10;
  while ( i > -1 ) {
    console.log(i--);
  }
}
countDown(10)
