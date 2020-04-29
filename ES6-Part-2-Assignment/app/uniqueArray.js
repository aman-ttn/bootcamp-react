export function uniqueArray(arr){
    var unique=new Array;
    for(var i of arr){
        if(arr.lastIndexOf(i)==arr.indexOf(i)){
            unique.push(i);
        }
    }
    return unique;
}