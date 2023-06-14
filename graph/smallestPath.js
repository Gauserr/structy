const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set()
  const queue = [{ val: nodeA, depth: 0 }]
  while (queue.length) {
    const { val, depth } = queue.shift()
    if (visited.has(val)) continue
    visited.add(val)
    if (val === nodeB) return depth
    for (let neighbor of graph[val]) {
      queue.push({ val: String(neighbor), depth: depth + 1 })
    }
  }
  return -1
}

const buildGraph = (edges) => {
  const graph = {}
  for (const pair of edges) {
    const [a, b] = pair
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
]

console.log(shortestPath(edges, 'a', 'e'))
