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
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return false
  if (visited[r][c] || grid[r][c] === 'W') return false
  visited[r][c] = true
  const neighbors = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ]
  for (const [row, col] of neighbors) traverse(grid, row, col, visited)
  return true
}

module.exports = islandCount
