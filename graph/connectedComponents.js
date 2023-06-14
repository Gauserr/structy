//input = adjacency list
//output = int
const connectedComponentsCount = (graph) => {
  let components = 0
  const visited = new Set()
  for (let node in graph) {
    if (traverse(graph, node, visited)) components++
  }
  return components
}

const traverse = (graph, node, visited) => {
  if (visited.has(node)) return false
  visited.add(node)
  for (let neighbor of graph[node]) {
    traverse(graph, String(neighbor), visited)
  }
  return true
}
console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
)
