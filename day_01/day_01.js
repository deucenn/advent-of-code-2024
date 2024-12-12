const fs = require('fs');

/**
 * Reads and validates the input from a file.
 * @param {string} filePath - Path to the input file.
 * @returns {Array} Parsed lines as arrays of numbers.
 */
function readAndValidateInput(filePath) {
    try {
        const input = fs.readFileSync(filePath, 'utf-8').trim();
        if (!input) throw new Error('Input file is empty.');

        const lines = input.split('\n').map(line => {
            const [a, b] = line.trim().split(/\s+/).map(Number);
            if (isNaN(a) || isNaN(b)) throw new Error(`Invalid input found in line: "${line}"`);
            return [a, b];
        });

        return lines;
    } catch (error) {
        throw new Error(`Error reading or parsing file: ${error.message}`);
    }
}

/**
 * Separates two lists from parsed input data.
 * @param {Array} data - Array of [a, b] pairs.
 * @returns {Object} Lists as separate arrays.
 */
function separateLists(data) {
    const list1 = data.map(pair => pair[0]);
    const list2 = data.map(pair => pair[1]);
    return { list1, list2 };
}

/**
 * Calculates the sum of absolute differences between corresponding elements of two lists.
 * @param {Array} list1 - First sorted list.
 * @param {Array} list2 - Second sorted list.
 * @returns {number} Sum of absolute differences.
 */
function calculateSumOfDifferences(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error(`List lengths do not match. List1: ${list1.length}, List2: ${list2.length}`);
    }

    return list1.reduce((sum, val, index) => sum + Math.abs(val - list2[index]), 0);
}

try {
    // Step 1: Read and validate input
    const filePath = './input.txt';
    const parsedData = readAndValidateInput(filePath);

    // Step 2: Separate lists
    const { list1, list2 } = separateLists(parsedData);

    console.log('Original List 1:', list1);
    console.log('Original List 2:', list2);

    // Step 3: Sort lists numerically
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    console.log('Sorted List 1:', list1);
    console.log('Sorted List 2:', list2);

    // Step 4: Calculate sum of absolute differences
    const result = calculateSumOfDifferences(list1, list2);
    console.log('Sum of differences:', result);
} catch (err) {
    console.error(`Error: ${err.message}`);
}




