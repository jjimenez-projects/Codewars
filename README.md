# Codewars code completions

## What does it consist of?

- This repo will consist of completing Codewars challenges and posting the solutions.
- Example code and solution have been provided below.

### Example code question -

```text
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!
```

### Example code answer -

```javascript
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
}
```
