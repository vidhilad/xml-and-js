
const data=[
  { born: 1870, 
    died: 1924 },
  { born: 1893, 
    died: 1976 },
  { born: 1869, 
    died: 1948 },
  { born: 1901, 
    died: 1989 },
];

console.log(data);
//console.log(JSON.parse(data));

console.log("-----------------------------------------------------");
const age=data.map((lifeline)=> {
  return lifeline.died-lifeline.born
});

console.log("Age");
console.log(age);
console.log("-----------------------------------------------------");

const filtered=age.filter((lifeline)=>{
return lifeline > 75
});

console.log("Age greater than 75.");
console.log(filtered);
console.log("-----------------------------------------------------");


const oldest=filtered.reduce((valueNow,valueAfter)=>{
  return valueNow>valueAfter? valueAfter:valueNow
  } );

console.log("Filtered");
console.log(oldest);
console.log("-----------------------------------------------------");

const final=data.map((lifeline)=>{return lifeline.died=lifeline.born})
               .filter((personAge)=>{return personAge.age>75})
               .reduce((previousItem,currentItem)=>{return currentItem>previousItem? previousItem:currentItem}, 0);
console.log("Refactor Chain");
console.log(final);
console.log("---------------------<<END>>-----------------------------");
