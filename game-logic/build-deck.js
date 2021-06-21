
// function returns an array = [1, 2, ..., num]
const buildDeck = function(num) {
  let deck = []
  for(let i = 1; i < num + 1; i++) {
    deck.push(i)
  }
  return deck
}

module.exports = buildDeck
