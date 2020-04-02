// Given an integer n, return any array containing n unique integers such that they add up to 0.


var sumZero = function(n) {
    let half = n / 2
    let array = [];
    if(n % 2 === 0){
        for(i=1; i <= half; i++){
            array.push(i)
            array.push(-i)
        }
    }
    else{
        for(i=1; i <= Math.floor(half); i++){
            array.push(i)
            array.push(-i)
        }
        array.push(0)
    }
    console.log(array)
    return array
};
