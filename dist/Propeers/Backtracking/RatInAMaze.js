"use strict";
function findAllPaths(maze) {
    const n = maze.length;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]; //d R U L
    const paths = [];
    const currentPaths = [];
    function isValidMove(row, col) {
        return row >= 0 && row < n && col >= 0 && col < n && maze[row][col] === 1;
    }
    function solveMaze(row, col) {
        //basecase
        if (row === n - 1 && col === n - 1) {
            paths.push(currentPaths.join(""));
            return;
        }
        //mark as visited
        maze[row][col] = 0;
        for (const [deltaRow, deltaCol] of dir) {
            const newRow = row + deltaRow;
            const newCol = col + deltaCol;
            if (isValidMove(newRow, newCol)) {
                if (deltaRow === 1 && deltaCol === 0) {
                    currentPaths.push("D");
                }
                else if (deltaRow === 0 && deltaCol === 1) {
                    currentPaths.push("R");
                }
                else if (deltaRow === -1 && deltaCol === 0) {
                    currentPaths.push("U");
                }
                else if (deltaRow === 0 && deltaCol === -1) {
                    currentPaths.push("L");
                }
                solveMaze(newRow, newCol);
                //backtrack 
                maze[row][col] = 1;
                currentPaths.pop();
            }
        }
    }
    if (maze[0][0] === 1) {
        solveMaze(0, 0);
    }
    return paths;
}
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
];
const allPaths = findAllPaths(maze);
console.log(allPaths);
function findPaths(maze) {
    const n = maze.length;
    const allPaths = [];
    const path = Array.from({ length: n }, () => Array(n).fill(0));
    if (n === 1) {
        return maze[0][0] === 1 ? ["1"] : [" "];
    }
    function isValidMove(row, col) {
        return row >= 0 && row < n && col >= 0 && col < n && maze[row][col] === 1 && path[row][col] === 0;
    }
    function solveMaze(row, col) {
        if (row === n - 1 && col === n - 1) {
            path[row][col] = 1;
            allPaths.push(path.flat().join(" "));
            path[row][col] = 0;
            return;
        }
        if (isValidMove(row, col)) {
            path[row][col] = 1;
            solveMaze(row + 1, col);
            solveMaze(row - 1, col);
            solveMaze(row, col + 1);
            solveMaze(row, col - 1);
            path[row][col] = 0;
        }
    }
    if (maze[0][0] === 1) {
        solveMaze(0, 0);
    }
    return allPaths.length > 0 ? allPaths : [""];
}
const maze1 = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1],
];
const maze2 = [
    [1, 0],
    [0, 1],
];
const maze3 = [
    [1],
];
const maze4 = [
    [0],
];
// 1 0 0 1 1 1 1 1 1
// 1 0 0 1 0 0 1 1 1
// 1 0 0 1 1 0 0 1 1
// 1 0 0 1 1 1 0 0 1
console.log("Sample Output 1:");
console.log(findPaths(maze1)); // Expected output: ["1 0 0 1 0 0 1 1 1"]
console.log("Sample Output 2:");
console.log(findPaths(maze2)); // Expected output: [""]
console.log("Sample Output 3:");
console.log(findPaths(maze3)); // Expected output: ["1"]
