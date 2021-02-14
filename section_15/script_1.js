// scope
function bb() {
  var a = "hello";
  console.log('hello')
}

var fun = 5;

// scope == namespace??
function funFunction() {
  // child scope
  var fun = "hello"
  console.log(fun)
}

function funerFuncton() {
  // child scope
  var fun = "byee"
  console.log(fun)
}

function funestFuncton() {
  // child scope
  fun = "ahhhhh"
  console.log(fun)
}

console.log(fun)