const islandCount = (grid) => {
  let count = 0
  const visited = []
  for (let i = 0; i < grid.length; i++)
    visited.push(new Array(grid[0].length).fill(false))

  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[r].length; c++)
      if (traverse(grid, r, c, visited)) count++
  return count
}

const traverse = (grid, r, c, visited) => {
  if (visited[r][c] || grid[r][c] === 'W') return false
  if (grid[r][c] === 'W') return false
  visited[r][c] = true
  const neighbors = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ]
  for (const [row, col] of neighbors) {
    if (row >= 0 && row < grid.length && col >= 0 && col < grid[r].length) {
      traverse(grid, row, col, visited)
    }
  }
  return true
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

const result = islandCount(grid)
console.log(result)

//3
