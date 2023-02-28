function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const user = {};
const admin = {
    age: 22,
}

console.log(`${isEmpty(user)}\n${isEmpty(admin)}`)