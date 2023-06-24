const bestBridge = (grid) => {
  const islandOne = []
  const visited = []
  for (let i = 0; i < grid.length; i++)
    visited.push(new Array(grid[0].length).fill(false))

  outerloop: for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === 'L') {
        mapIsland(grid, r, c, islandOne, visited)
        break outerloop
      }

  while (islandOne.length) {
    const [r, c, d] = islandOne.shift()
    if (grid[r][c] === 'L' && !visited[r][c]) return d - 1
    visited[r][c] = true

    const neighbors = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ]

    for (let [row, col] of neighbors)
      if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
        if (!visited[row][col]) islandOne.push([row, col, d + 1])
      }
  }
  return 'uh-0h'
}

const mapIsland = (grid, r, c, island, visited) => {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return
  if (visited[r][c]) return
  if (grid[r][c] === 'W') return
  visited[r][c] = true
  island.push([r, c, 0])
  const neighbors = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ]
  for (let [row, col] of neighbors) mapIsland(grid, row, col, island, visited)
  return
}

module.exports = bestBridge
