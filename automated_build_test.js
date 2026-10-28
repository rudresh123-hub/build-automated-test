const { test } = require("node:test");
const assert = require("node:assert");

function add(a, b) {
    return a + b;
}

console.log("Automated Build Test");
console.log(`2 + 3 = ${add(2, 3)}`);

test("add positive numbers", () => {
    assert.strictEqual(add(2, 3), 5);
});

test("add negative numbers", () => {
    assert.strictEqual(add(-2, -3), -5);
});

test("add mixed numbers", () => {
    assert.strictEqual(add(5, -2), 3);
});
