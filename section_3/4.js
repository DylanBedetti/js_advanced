function a() {
  aa = "hello";
  console.log(aa);
  return function b() {
    bb = "how are you?";
    console.log(bb);
    return function c() {
      cc = "I am well thanks";
      console.log(cc);
    };
  };
}

a()()();
