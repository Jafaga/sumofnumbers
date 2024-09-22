"use strict";
/*
Justine Afaga
ICS 314
Professor Chad Morita, Section 5
Assignment: E26 Five problems every software engineer should be able to solve (Part 1)
Due Date: September 22, 2024
*/
// Function using a for-loop
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Function using a while-loop
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
// Function using recursion
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    else {
        return numbers[0] + sumRecursion(numbers.slice(1));
    }
}
// Function using Array functional programming (reduce)
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Test the functions
console.log("For Loop Sum:", sumFor([1, 2, 3, 4])); // 10
console.log("While Loop Sum:", sumWhile([1, 2, 3, 4])); // 10
console.log("Recursion Sum:", sumRecursion([1, 2, 3, 4])); // 10
console.log("Functional Sum:", sumTheFunctionalWay([1, 2, 3, 4])); // 10
