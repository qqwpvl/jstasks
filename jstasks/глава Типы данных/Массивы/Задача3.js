let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();
// ['a','b',f] - теперь у макссива 3 элемента 