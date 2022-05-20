"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
    getInfo() {
        return [this.name, `$${this.price}`];
    }
}
exports.Product = Product;
