// Associative Property

const { 
  compose, 
  scream, 
  exclaim, 
  repeat 
} = require('./shared')

const withExuberance = compose(
  repeat, 
  exclaim, 
  scream
)

const str = 'I love egghead'

console.log(withExuberance(str))