# Wordle Game

UI Behavior:

- When clicking a character for the first time it should be displayed in the leftmost square, second
  character in the second square and so on.
- When all squares are full, clicking another character will do nothing.
- Clicking the backspace button will remove the right most character from the sqaures. If there are no
  characters in any sqaure, backspace will do nothing.
- Clicking the enter when all characters filled will check if the word exist in the English dictionary. In
  any other case, clicking enter will do nothing.

Word validation on `Enter`: If the word exist in the English dictionary all the squares' border will be painted in <span style="color:green">green</span>.
If the word doesn't exist in the English dictionary or not all sqaures are filled, all sqaures' border
should be painted in <span style="color:red">red</span>
.

### To run the project:

```js
npm i
npm run dev
```
