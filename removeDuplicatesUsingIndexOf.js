let arr = [1, 2, 3, 1, 4, 5, 2, 5, 2];
let resultArr = [];
for(let ele of arr) {
    if(resultArr.indexOf(ele) == -1){

        resultArr.push(ele);
    }
}
console.log(resultArr);