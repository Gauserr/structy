const closestCarrot = (grid, startRow, startCol) => {
  const visited = []
  for (let i = 0; i < grid.length; i++)
    visited.push(new Array(grid[0].length).fill(false))

  const queue = [
    { val: grid[startRow][startCol], r: startRow, c: startCol, d: 0 },
  ]
  while (queue.length) {
    const { val, r, c, d } = queue.shift()
    if (visited[r][c]) continue
    visited[r][c] = true
    if (val === 'X') continue

    if (val === 'C') return d

    const neighbors = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ]

    for (let [row, col] of neighbors)
      if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length)
        queue.push({ val: grid[row][col], r: row, c: col, d: d + 1 })
  }
  return -1
}
module.exports = closestCarrot
