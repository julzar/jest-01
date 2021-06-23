const {createArray, createDeck} = require('../game-logic/build-deck')

// tests the createArray function
test('create array = [1, 2, 3]', () => {
  expect(createArray(3)).toEqual([1, 2, 3])
})

// tests the createDeck funtion for a deck with 2 card values and 2 suits
test('create array of objects = [{"1": 1}, {"1": 2}, {"2": 1}, {"2": 2}]', () => {
  expect(createDeck(2, createArray(2))).toEqual([{"1": 1}, {"1": 2}, {"2": 1}, {"2": 2}])
})