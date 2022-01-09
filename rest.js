const minofAll = (...numbers) => {
    let min = numbers[0]

    
    for(let i = 0; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i]
        }
    }
    return{min}
}
console.log(minofAll(2, 3, 4, 5, 6,1));
console.log(minofAll(-1, -5, 10));
console.log(minofAll(10, 20));