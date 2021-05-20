const convertFahrToCelsius = (num) => {
    if ((Number(num) === 0 || Number(num)) && !(Array.isArray(num)) && (num !== "")) {
        let Cel = (num - 32) * 5 /9
        Cel = Cel.toFixed(4)
        return(Cel)
    } else if (Array.isArray(num)) {
        return `${JSON.stringify(num)} is not a valid number but an array`
    } else {
        return `${JSON.stringify(num)} is not a valid number but a/an ${typeof(num)}`
        }
} 

console.log(convertFahrToCelsius(''))
console.log(convertFahrToCelsius(""))
console.log(convertFahrToCelsius(1.234))
console.log(convertFahrToCelsius("123abc"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))



const checkYuGiOh = (n) => {
    if ((Number.isInteger(n)) || ((Number(n))) && !(Array.isArray(n))) {
        let a = [];
    for (var i=1; i <= n; i++){
        if (i % 30 == 0) a.push("yu-gi-oh");
        else if (i % 15 == 0) a.push("gi-oh");
        else if (i % 10 == 0) a.push("yu-oh");
        else if (i % 6 == 0) a.push("yu-gi");
        else if (i % 5 == 0) a.push("oh");
        else if (i % 3 == 0) a.push("gi");
        else if (i % 2 == 0) a.push("yu");
        else a.push(i);
    }
    return(a)
    } else {
        return `invalid parameter:${JSON.stringify(n)}`
    }
}


console.log(checkYuGiOh("fizzbuzz is meh"))
console.log(checkYuGiOh("123fizzbuzz"))
console.log(checkYuGiOh([]))
console.log(checkYuGiOh([1,2,3]))
