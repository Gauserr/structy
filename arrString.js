//Complete
function uncompress(s) {
  let result = ''
  let currentNum = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (Number(char)) currentNum += char
    else {
      result += char.repeat(Number(currentNum))
      currentNum = ''
    }
  }
  return result
}
//expect uncompress('2c3a1t') === 'ccaaat'
// console.log(uncompress('2c3a1t'))

//Complete
function compress(s) {
  let result = ''
  let currentChar = ''
  let currentCharCount = 0

  for (let i = 0; i <= s.length; i++) {
    const char = s[i]
    if (char !== currentChar) {
      result +=
        currentCharCount === 0
          ? ''
          : currentCharCount === 1
          ? currentChar
          : `${currentCharCount}${currentChar}`
      currentChar = char
      currentCharCount = 1
    } else currentCharCount++
  }
  return result
}
//expect compress('ccaaatsss') === '2c3at3s'
console.log(compress('ccaaatsss'))

//complete
function anagrams(s1, s2) {
  const s1Store = {}
  const s2Store = {}
  for (let i = 0; i < s1.length; i++)
    s1Store[s1[i]] = s1Store[s1[i]] ? s1Store[s1[i]] + 1 : 1
  for (let i = 0; i < s2.length; i++)
    s2Store[s2[i]] = s2Store[s2[i]] ? s2Store[s2[i]] + 1 : 1
  if (Object.keys(s1Store).length !== Object.keys(s2Store).length) return false
  for (const key in s1Store) {
    if (s1Store[key] !== s2Store[key]) return false
  }
  return true
}
console.log(anagrams('restful', 'fluster'))
//expect ^ to be true

//Complete
const mostFrequentChar = s => {
  let mostFrequent
  let maxCount = 0
  const store = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    store[char] = store[char] + 1 || 1
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (store[char] > maxCount) {
      mostFrequent = char
      maxCount = store[char]
    }
  }
  return mostFrequent
}

//complete
const pairSum = (numbers, targetSum) => {
  const complementStore = {}
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i]
    if (value in complementStore) return [complementStore[value], i]
    complementStore[targetSum - value] = i
  }
}
