module.exports = function reverse(n) {
    let str = Math.sqrt(n ** 2).toString();
    let arr = str.split("").reverse();
    return Number(arr.join(""));
};
