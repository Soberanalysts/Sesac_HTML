"use strict";
// CommonJS 스타일, ESModule 스타일
// require 했던게 commonjs 스타일..
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const string_1 = require("./string");
console.log(`Add: ${(0, math_1.add)(10, 5)}`);
console.log(`Sub: ${(0, math_1.sub)(10, 5)}`);
console.log(`Upper: ${(0, string_1.toUpperCase)("HeLlooooo")}`);
console.log(`Lower: ${(0, string_1.toLowerCase)("HeLlooooo")}`);
