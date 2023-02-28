function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      
      return 'Родители разрешили?';
    }
}

function checkAge2(age) {
    if (age > 18) {
      return true;
    }
    
    return 'Родители разрешили?';
}

console.log(checkAge(10),'\n',checkAge2(10))

//Оба варианта функций работают одинаково