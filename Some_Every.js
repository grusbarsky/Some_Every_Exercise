//some

function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

function hasAZero(num){
    return num
    .split ("")
    .some(function(value){
        return value === 0;
    });
}

//every
function hasOnlyOddNumber(arr){
    return arr.every(function(value){
        return value % 2 !== 0;
});
}

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(val);
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in val;
    });
}

function hasCertainValue(arr, key, findVal){
    return arr.every(function(value){
        return value[key] === findVal;
    });
}