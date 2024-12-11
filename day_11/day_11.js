let input = "9694820 93 54276 1304 314 664481 0 4";

console.log("Advent of Code - Day 11");
console.log("Input:", input);

let inputEdited = input.split(" ");

console.log("Number of stones:", inputEdited.length);

function blink(stones, count) {
  console.log("Current stones:", stones);
  console.log("Current count:", count);

  if (count > 0) {
    let result = [];

    for (let i = 0; i < stones.length; i++) {
      const currentStone = stones[i];

      // Skip non-numeric inputs or empty strings
      if (!currentStone || isNaN(parseInt(currentStone, 10))) {
        continue;
      }

      if (currentStone === "0") {
        //   Rule ONE
        result.push("1");
      } else if (currentStone.length % 2 === 0) {
        // Rule TWO
        let half = currentStone.length / 2;
        let left = currentStone.slice(0, half);
        let right = currentStone.slice(half);

        // Deleted leading zeros. If string is empty, add a 0
        left = left === "" ? "0" : left.replace(/^0+/, "") || "0";
        right = right === "" ? "0" : right.replace(/^0+/, "") || "0";

        result.push(left);
        result.push(right);
      } else {
        // Rule THREE
        let stoneNum = parseInt(currentStone, 10);
        result.push((stoneNum * 2024).toString());
      }
    }

    blink(result, count - 1);
  } else {
    console.log("Final stones:", stones);
    console.log("Final stones length:", stones.length);
  }
}

blink(inputEdited, 25)
blink(inputEdited, 75);
