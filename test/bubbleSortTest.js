const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')


describe('bubbleSort functionality', function() {
  context('bubbleSort function', function(){
    it('it can sort array elements by value', function(){
      assert.equal(bubbleSort([7, 3, 10, 19, 1], [1, 3, 7, 10, 19]))
    })
  })
})
