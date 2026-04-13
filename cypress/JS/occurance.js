
const str = 'swaroop'
const char = 'o'

function occurance(str1) {
    let count = 0

    for (let i = 0; i <= str1.length; i++) {

        if (str1.charAt(i) == char) {
            count += 1
        }
    }
    return count
}
console.log(occurance(str))
document.write(occurance(str))