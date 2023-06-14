const largestComponent = (graph) => {
  let largest = 0
  const visited = new Set()

  for (let node in graph) {
    const componentSize = traverse(graph, node, visited)
    if (componentSize > largest) largest = componentSize
  }

  return largest
}

const traverse = (graph, node, visited) => {
  if (visited.has(node)) return 0
  visited.add(node)

  let size = 1
  for (let neighbor of graph[node]) {
    size += traverse(graph, String(neighbor), visited)
  }

  return size
}

console.log(
  largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
  })
)
