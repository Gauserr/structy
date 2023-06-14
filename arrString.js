//Complete
function uncompress(s) {
  var result = ''
  var currentNum = ''
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
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
  var result = ''
  var currentChar = ''
  var currentCharCount = 0
  for (var i = 0; i <= s.length; i++) {
    var char = s[i]
    if (char !== currentChar) {
      result +=
        currentCharCount === 0
          ? ''
          : currentCharCount === 1
          ? currentChar
          : ''.concat(currentCharCount).concat(currentChar)
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
  var s1Store = {}
  var s2Store = {}
  for (var i = 0; i < s1.length; i++)
    s1Store[s1[i]] = s1Store[s1[i]] ? s1Store[s1[i]] + 1 : 1
  for (var i = 0; i < s2.length; i++)
    s2Store[s2[i]] = s2Store[s2[i]] ? s2Store[s2[i]] + 1 : 1
  if (Object.keys(s1Store).length !== Object.keys(s2Store).length) return false
  for (var key in s1Store) {
    if (s1Store[key] !== s2Store[key]) return false
  }
  return true
}
console.log(anagrams('restful', 'fluster'))
//expect ^ to be true
//Complete
var mostFrequentChar = function (s) {
  var _a
  var mostFrequent
  var maxCount = 0
  var store = {}
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
    store[char] = ((_a = store[char]) !== null && _a !== void 0 ? _a : 0) + 1
  }
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
    if (store[char] > maxCount) {
      mostFrequent = char
      maxCount = store[char]
    }
  }
  return mostFrequent
}
//complete
var pairSum = function (numbers, targetSum) {
  var complementStore = {}
  for (var i = 0; i < numbers.length; i++) {
    var value = numbers[i]
    if (value in complementStore) return [complementStore[value], i]
    complementStore[targetSum - value] = i
  }
}
