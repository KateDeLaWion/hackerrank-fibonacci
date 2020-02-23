
//My fibonacci series 

let n = 30;
let arr=[0,1];
for (let i= 0; i<=n-2; i++){
   nextNum= arr[i] + arr[i+1];
   arr.push(nextNum); 
}
console.log(arr[n])

