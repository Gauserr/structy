const longestPath = (graph) => {
  let longest = 0
  for (let node in graph) {
    const pathLen = traverse(graph, node)
    if (pathLen > longest) longest = pathLen
  }
  return longest
}

const traverse = (graph, node) => {
  let longestPath = 0
  for (let neighbor of graph[node]) {
    const pathLen = 1 + traverse(graph, neighbor)
    if (pathLen > longestPath) longestPath = pathLen
  }
  return longestPath
}

module.exports = longestPath
