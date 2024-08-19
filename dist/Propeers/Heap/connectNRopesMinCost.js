"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heap_js_1 = __importDefault(require("heap-js"));
function connectRopesWithMinCost(ropes) {
    if (ropes.length === 0)
        return 0;
    // Initialize min-heap
    const minHeap = new heap_js_1.default(heap_js_1.default.minComparatorNumber);
    // Push all rope lengths into the min-heap
    for (const rope of ropes) {
        minHeap.push(rope);
    }
    let totalCost = 0;
    // While more than one rope is in the heap
    while (minHeap.size() > 1) {
        // Extract the two smallest ropes
        const first = minHeap.pop();
        const second = minHeap.pop();
        // Calculate cost of connecting these two ropes
        const cost = first + second;
        totalCost += cost;
        // Push the new rope length back into the heap
        minHeap.push(cost);
    }
    return totalCost;
}
// Example usage
const ropes = [4, 3, 2, 6];
const minCost = connectRopesWithMinCost(ropes);
console.log(`Minimum cost to connect all ropes: ${minCost}`); // Output: 29
