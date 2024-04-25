// Without Loop Fusion

function withoutLoopFusion() {
    var N = 5;
    var A = [];
    var B = [5,4,3,2,1];
    var C = [];
    var D = [];

    // Loop 1
    for (let i = 0; i < N; i++) {
        A[i] = B[i] + 1;
    }

    // Loop 2
    for (let i = 0; i < N; i++) {
        C[i] = A[i] / 2;
    }

    // Loop 3
    for (let i = 0; i < N; i++) {
        A[i] = B[i] + 1;
        C[i] = A[i] / 2;
        D[i] = 1 / C[i + 1];
    }
}

// With Loop Fusion

function withLoopFusion() {
    var N = 5;
    var A = [];
    var B = [5,4,3,2,1];
    var C = [];
    var D = [];

    // Loop Fusion
    for (let i = 0; i < N; i++) {
        A[i] = B[i] + 1;
        C[i] = A[i] / 2;
        D[i] = 1 / C[i + 1];
    }
}

// Measure execution time for withoutLoopFusion
var startTime1 = performance.now();
for (let i = 0; i < 1000000; i++) {
    withoutLoopFusion();
}
var endTime1 = performance.now();
var executionTime1 = endTime1 - startTime1;

// Measure execution time for withLoopFusion
var startTime2 = performance.now();
for (let i = 0; i < 1000000; i++) {
    withLoopFusion();
}
var endTime2 = performance.now();
var executionTime2 = endTime2 - startTime2;

console.log("Execution time for withoutLoopFusion:", executionTime1, "milliseconds");
console.log("Execution time for withLoopFusion:", executionTime2, "milliseconds");
