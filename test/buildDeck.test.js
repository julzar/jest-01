const buildDeck = require('../game-logic/build-deck')

test('create array = [1, 2, 3]', () => {
  expect(buildDeck(3)).toEqual([1, 2, 3])
})