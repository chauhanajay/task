/**
 * Task 1
 * Given a sentence with multiple lowercase words separated by spaces, write a Javascript code that finds the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignorel any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this.
 *
 * ip: "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers" (Socrates)
 * op:  "experience"
 * Note: Longest words are "everything" and "experience", but the second has the most vowels
 */
const inputString = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length

const opAry = inputString.replace(/[^a-zA-Z ]/g, "").split(" ")

const op = opAry.reduce((carry, curr) => {
    if (carry.length == curr.length) {
        carry = countVowels(curr) > countVowels(carry) ? curr : carry
    }
    else if (curr.length > carry.length) {
        carry = curr
    }
    return carry
}, "")

console.log(op)
