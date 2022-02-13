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
console.log("arr3= ",arr3);
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
    }return temp;
    
}
console.log(removeAt(arr3,3))

/*
Swap positions of successive pairs of values of given array. 
If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3].
 For example, change input ["Brendan",true,42] to [true,"Brendan",42].
 As with all array challenges, do this without using any built-in array methods.
 */
function swap(arr){
    let arrLength=0; // dongunun nereye kadar iterate edecegini tutacagiz
    if(arr.length%2==0){
        arrLength=arr.length; // array uzunlugu cift sayi tum arrayi iterate et
    }else{
        arrLength=arr.length-1; // array uzunlugu tek sayi, sondan 1 eksige kadar iterate et
    }
    // arrLength dongunun stop conditionda kontrol edilen degeri
for(let i=0; i<arrLength; i+=2){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}
return arr;
}
console.log(swap(arr3));

/*Sara is looking to hire an awesome web developer and has received applications from various sources. 
Her assistant alphabetized them but noticed some duplicates. Given a sorted array, 
remove duplicate values. Because array elements are already in order,
 all duplicate values will be grouped together. 
As with all these array challenges, do this without using any built-in array methods.
*/

let arrD= [1,1,1,2,3,3,4,4,4,5,5]
//expected result= [1,2,3,4,5]
console.log(arrD)
function removeDuplicates(arr){
    let pointer1= 0;
    let pointer2=0;
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[pointer1]!=arr[pointer2]){
            newArr.push(arr[pointer1]);
            pointer1=pointer2;
            pointer2++;
        }else{
            pointer2++;
        }

    }
    newArr.push(arr[pointer1]);
    return newArr;
}
console.log(removeDuplicates(arrD))