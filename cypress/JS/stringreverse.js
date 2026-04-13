var str = "swaroop"
function strReverse(str1) {
    var rstr = ""
    for (var i = str1.length - 1; i >= 0; i--) {
        rstr += str1[i]
    }
    return rstr

}
console.log(strReverse(str))
