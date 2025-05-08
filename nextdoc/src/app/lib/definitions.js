"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var mySchema = zod_1.z.string();
console.log(mySchema.safeParse('Igor'));
