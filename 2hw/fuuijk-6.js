function landPerimeter(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'X') {
        perimeter += 4; 
        if (i > 0 && grid[i - 1][j] === 'X') {
          perimeter -= 2; 
        }
        if (j > 0 && grid[i][j - 1] === 'X') {
          perimeter -= 2; 
        }
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}

// Examples
const grid1 = [
  'XOOXO',
  'XOOXO',
  'OOOXO',
  'XXOXO',
  'OXOOO'
];

const grid2 = [
  'XOOO',
  'XOXO',
  'XOXO',
  'OOXX',
  'OOOO'
];

console.log(landPerimeter(grid1)); 
console.log(landPerimeter(grid2)); 
