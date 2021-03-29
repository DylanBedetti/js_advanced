"use strict";
const obj = {
  a: function a() {
    console.log(this);
  },
  b: function b() {
    const bb = "hello";
    console.log(this);
    return function c() {
      const cc = "how are you?";
      console.log(this);
    };
  },
};

obj.a();
obj.b()();
