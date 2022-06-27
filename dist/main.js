"use strict";

// pkgs/fbutil/dist/main.js
function hello() {
  console.log(`Asdasd`);
}

// pkgs/fbutilesbuild/dist/main.js
function hello2() {
  console.log(`Asdasd`);
}

// src/main.ts
function lol() {
  console.log(`I love you`);
  hello();
  hello2();
}
export {
  lol as default
};
//# sourceMappingURL=main.js.map
