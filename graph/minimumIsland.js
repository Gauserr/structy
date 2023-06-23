const minimumIsland = (grid) => {
  let smallest
  const visited = []
  for (let row of grid) visited.push(new Array(row.length).fill(false))

  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[r].length; c++) {
      const islandLen = traverse(grid, r, c, visited)
      if (islandLen) if (!smallest || islandLen < smallest) smallest = islandLen
    }
  return smallest
}

const traverse = (grid, r, c, visited) => {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return 0
  if (visited[r][c]) return 0
  visited[r][c] = true
  if (grid[r][c] === 'W') return 0
  const neighbors = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ]

  let len = 1
  for (let [row, col] of neighbors) len += traverse(grid, row, col, visited)
  return len
}

module.exports = minimumIsland
