// add solution here
function theBeatlesPlay(Musicians, Instruments) {
  var array = [];
  for (let i = 0; i < Musicians.length; i++) {
    if (i === 0) {
      array.push(`${Musicians[0]} plays ${Instruments[0]}`);
    } else {
      array.push(`${Musicians[i]} plays ${Instruments[i]}`);
    }
  } return array;
}

function johnLennonFacts(Facts) {
  var i = 0;
  while (i < Facts.length) {
    Facts[i] = `${Facts[i]}!!!`;
    i++;
  } return Facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    number += 1;
    array.push("I love the Beatles!");
  } 
  while (number < 15);
  return array;
}