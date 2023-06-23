const minimumIsland = require('../graph/minimumIsland.js')
const islandCount = require('../graph/islandCount.js')
const closestCarrot = require('../graph/closestCarrot.js')
const longestPath = require('../graph/longestPath.js')

describe('Graph Tests', () => {
  describe('islandCount', () => {
    it('test 0', () => {
      const grid = [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
      ]
      expect(islandCount(grid)).toEqual(3)
    })
    it('test 1', () => {
      const grid = [
        ['L', 'W', 'W', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['W', 'L', 'W', 'L', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'L', 'L', 'L'],
      ]
      expect(islandCount(grid)).toEqual(4)
    })
    it('test 2', () => {
      const grid = [
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
      ]

      expect(islandCount(grid)).toEqual(1)
    })
    it('test 3', () => {
      const grid = [
        ['W', 'W'],
        ['W', 'W'],
        ['W', 'W'],
      ]
      expect(islandCount(grid)).toEqual(0)
    })
  })
  describe('minimumIsland', () => {
    it('test 0', () => {
      const grid = [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
      ]
      expect(minimumIsland(grid)).toEqual(2)
    })
    it('test 1', () => {
      const grid = [
        ['L', 'W', 'W', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['W', 'L', 'W', 'L', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'L', 'L', 'L'],
      ]
      expect(minimumIsland(grid)).toEqual(1)
    })
    it('test 2', () => {
      const grid = [
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
      ]

      expect(minimumIsland(grid)).toEqual(9)
    })
    it('test 3', () => {
      const grid = [
        ['W', 'W'],
        ['L', 'L'],
        ['W', 'W'],
        ['W', 'L'],
      ]
      expect(minimumIsland(grid)).toEqual(1)
    })
  })
  describe('closest carrot', () => {
    it('test 0', () => {
      const grid = [
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O'],
        ['O', 'X', 'X', 'O', 'O'],
        ['O', 'X', 'C', 'O', 'O'],
        ['O', 'X', 'X', 'O', 'O'],
        ['C', 'O', 'O', 'O', 'O'],
      ]
      expect(closestCarrot(grid, 1, 2)).toEqual(4)
    })
    it('test 1', () => {
      const grid = [
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O'],
        ['O', 'X', 'X', 'O', 'O'],
        ['O', 'X', 'C', 'O', 'O'],
        ['O', 'X', 'X', 'O', 'O'],
        ['C', 'O', 'O', 'O', 'O'],
      ]
      expect(closestCarrot(grid, 0, 0)).toEqual(5)
    })
    it('test 2', () => {
      const grid = [
        ['O', 'O', 'X', 'X', 'X'],
        ['O', 'X', 'X', 'X', 'C'],
        ['O', 'X', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'X', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'C', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O'],
      ]
      expect(closestCarrot(grid, 3, 4)).toEqual(9)
    })
    it('test 3', () => {
      const grid = [
        ['O', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'X', 'X', 'O'],
        ['O', 'X', 'C', 'C', 'O'],
      ]
      expect(closestCarrot(grid, 1, 4)).toEqual(2)
    })
    it('test 4', () => {
      const grid = [
        ['O', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'X', 'X', 'O'],
        ['O', 'X', 'C', 'C', 'O'],
      ]
      expect(closestCarrot(grid, 2, 0)).toEqual(-1)
    })
    it('test 5', () => {
      const grid = [
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
      ]
      expect(closestCarrot(grid, 0, 0)).toEqual(-1)
    })
    it('test 6', () => {
      const grid = [
        ['O', 'O', 'X', 'C', 'O'],
        ['O', 'X', 'X', 'X', 'O'],
        ['C', 'X', 'O', 'O', 'O'],
      ]

      expect(closestCarrot(grid, 2, 2)).toEqual(5)
    })
  })
  describe('longest path', () => {
    it('test 0', () => {
      const graph = {
        a: ['c', 'b'],
        b: ['c'],
        c: [],
      }
      console.log(longestPath(graph))
      expect(longestPath(graph)).toEqual(2)
    })
    it('test 1', () => {
      const graph = {
        a: ['c', 'b'],
        b: ['c'],
        c: [],
        q: ['r'],
        r: ['s', 'u', 't'],
        s: ['t'],
        t: ['u'],
        u: [],
      }
      expect(longestPath(graph)).toEqual(4)
    })
    it('test 2', () => {
      const graph = {
        h: ['i', 'j', 'k'],
        g: ['h'],
        i: [],
        j: [],
        k: [],
        x: ['y'],
        y: [],
      }

      expect(longestPath(graph)).toEqual(2)
    })
    it('test 3', () => {
      const graph = {
        a: ['b'],
        b: ['c'],
        c: [],
        e: ['f'],
        f: ['g'],
        g: ['h'],
        h: [],
      }
      expect(longestPath(graph)).toEqual(3)
    })
  })
})
