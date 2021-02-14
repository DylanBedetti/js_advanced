var word = "hello"

function firstFunction() {
  var word = "bye"
  function secondFunction() {
    console.log(word)
  }
  secondFunction()
}