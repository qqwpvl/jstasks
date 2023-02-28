// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
// }
  
// let user = makeUser();
  
// console.log( user.ref.name ); // Error: Cannot read property 'name' of undefined

function makeUser2() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
}
  
let user2 = makeUser2();
  
console.log( user2.ref().name ); // John