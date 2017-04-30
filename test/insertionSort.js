const assert = require('chai').assert
const insertionSort = require('../insertionSort')


describe('insertionSort functionality', function() {
  context('insertionSort function', function(){
    it('it can sort array elements by value', function(){
      assert.equal(insertionSort([7, 3, 10, 19, 1], [1, 3, 7, 10, 19]))
    })
  })
})
