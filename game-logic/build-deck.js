
// generates an array = [1, 2, etc..., num]
const createArray = (num) => {
  let array = []
  for(let i = 1; i <= num; i++) {
    array.push(i)
  }
  return array
}

// generates the deck object. First argument is a number = to the highest card value in the deck, second argument is createArray(['number of suits'])
const createDeck = (highCard, suits) => {
  let deck = []
  for(let i = 1; i <= highCard; i++) {
    suits.forEach(suit => deck.push({[i]: suit}))
  }
  return deck
}

module.exports = {createArray, createDeck}

/* sample deck structure
[
  {1: 1},
  {1: 2},
  {1: 3},
  {1: 4},
  {2: 1},
  {2: 2},
  {2: 3},
  {2: 4},
]
*/