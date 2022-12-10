function sym() {
    let args = []
    for(let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
        let result = [];
        arrayOne.forEach(item => {
            if(arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(item => {
            if(arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }
    return args.reduce(symDiff).sort();
}

sym([1,2,3], [5,1,2,4]);
console.log(sym([1,2,3], [5,1,2,4]));