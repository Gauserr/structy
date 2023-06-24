const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs)
  console.log(graph)
  const semesters = {}
  let requiredSemesters = 0
  for (let course in graph) {
    const numSemesters = calcSemesters(graph, course, semesters)
    if (numSemesters > requiredSemesters) requiredSemesters = numSemesters
  }
  return requiredSemesters || 1
}

const buildGraph = (edges) => {
  const graph = {}
  for (let pair of edges) {
    const [a, b] = pair
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[b].push(a)
  }
  return graph
}

const calcSemesters = (graph, course, semesters) => {
  if (course in semesters) return semesters[course]
  let longest = 0
  for (let prereq of graph[course]) {
    const numSems = calcSemesters(graph, prereq, semesters)
    if (numSems > longest) longest = numSems
  }

  semesters[course] = 1 + longest
  return semesters[course]
}

module.exports = semestersRequired
