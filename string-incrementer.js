/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(strng) {

    let numStr = strng
    let baseStr = ""

    // splits the string at where it is a number
    for (let i = strng.length - 1; i > 0; i--) {
        if (isNaN(Number(strng[i]))) {
            baseStr = strng.substring(0, i + 1)
            numStr = strng.substring(i + 1, strng.length)
            break;
        }
    }

    let num = Number(numStr) + 1

    if (numStr[0] == 0) {
        console.log("Condition 1")
        return strng.substring(0, (strng.length - num.toString().length)) + num
    } else if (numStr.length == 0) {
        console.log("Condition 2")
        return strng + 1;
    } else if (!isNaN(strng)) {
        console.log("Condition 3")
        return (Number(strng) + 1).toString()
    } else {
        console.log("Condition 4")
        return baseStr + num
    }
}

console.log(incrementString("foobar000"))