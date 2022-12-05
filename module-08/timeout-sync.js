// console.log(`before`);
// setTimeout(() => {
//   console.log("async function");
// }, 2000);
// // console.log(`after`);
// const main = () => {
//   const data = await loadData();
//   console.log(data.length);
//   };
//   const length = main();
//   console.log(length);
  
  
  Promise.resolve('Success!')

  .then(data => {
  
  return data.toUpperCase()
  
  })
  
  .then(data => {
  
  console.log(data)
  
  })
  
  
  