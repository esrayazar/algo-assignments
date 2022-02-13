/*
Given an array and an additional value, insert this value at the beginning of the array. 
Do this without using any built-in array methods.
*/

let arr = [3,6,7,8,4];
let val=9;
for(let i=0; i<arr.length; i++){
    let temp=arr[i]; // save ith element in temp
    arr[i] = val;    // now array[i] equals to val
    val = temp;
}
arr.push(val);
console.log(arr);

/*Given an array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop().
 */

let arr1 = [3,6,7,8,4];
let arr2=new Array();
console.log(arr1[0]);
console.log(arr1);
for(let i=1; i<arr1.length; i++){
    arr2[i-1]=arr1[i];
}
console.log(arr2);

/*
Given an array, index, and additional value, insert the value into array at given index.
Do this without using built-in array methods. You can think of pushFront(arr,val)
as equivalent to insertAt(arr,0,val).
 */

let arr3 = [1,5,7,3,4];
console.log(arr3);
function pushFront(arr,index,val){
    if(index>arr.length){
        return -1
    }
    let temp = new Array();
    let tindex = 0;
    for(let i=0; i<arr.length; i++){
        if(index==i)
        {
            temp[tindex] = val;
            tindex++;
            temp[tindex] = arr[i];
            tindex++;
        } else {
            temp[tindex] = arr[i];
            tindex++;
        }
    }
    return temp;
}
console.log(pushFront(arr3,3,2));
console.log(pushFront(arr3,9,2));

/*
Given an array and an index into array, remove and return the array value at that index. 
Do this without using built-in array methods except pop(). 
Think of popFront(arr) as equivalent to removeAt(arr,0)
*/
function removeAt(arr,index){
    let temp = new Array();
    let tindex = 0;
    for (let i=0; i<arr.length; i++){
        if(index!=i){
            temp[tindex] = arr[i];
            tindex++;
        }

    }
    
}
console.log(removeAt(arr3,3))