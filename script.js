// 1. Declare the lunches array
let lunches = [];

// 2–5. Function: Add lunch to end
function addLunchToEnd(array, lunchItem) {
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  array.push(lunchItem);
  return array;
}

// 6–9. Function: Add lunch to start
function addLunchToStart(array, lunchItem) {
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  array.unshift(lunchItem);
  return array;
}

// 10–14. Function: Remove lunch from end
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lunchItem = array[array.length - 1]; // peek before removing
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
    array.pop();
  }
  return array;
}

// 15–19. Function: Remove lunch from start
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lunchItem = array[0]; // peek before removing
    console.log(`${lunchItem} removed from the start of the lunch menu.`);
    array.shift();
  }
  return array;
}

// 21–25. Function: Get random lunch
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const lunchItem = array[randomIndex];
    console.log(`Randomly selected lunch: ${lunchItem}`);
  }
}

// 26–30. Function: Show menu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(", ")}`);
  }
}
