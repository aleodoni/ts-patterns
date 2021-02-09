"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Espresso_1 = __importDefault(require("./beverages/Espresso"));
var coffee = new Espresso_1.default();
console.log(coffee.getDescription());
console.log(coffee.cost());
