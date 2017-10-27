var testf = [0, 0, 0, 0];

if (testForZero() === 0) {
  console.log("Congrats! You Rock :\)");
} else {
  console.log("Nope, not all Zeros :(  ");
}

function testForZero(n) {
  var countAll = 0;
  for (var i = 0; i < testf.length; i++) {
    countAll = +testf[i];
  }
  return countAll;
}

testForZero();
