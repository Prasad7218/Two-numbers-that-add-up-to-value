var newArr = [1,21,3,14,5,60,7,6];

function findSum(arr, value){

  console.log(`Your Array is`);
  console.log(arr);
  console.log(`Your Value is`);
    
  var isAdd = false;
  
  for (var i=0; i<=arr.length; i++){
    var a = arr[i];
    for (var j=0; (j !== i) && (j<=arr.length); j++){
      var b = arr[j];
        if ((a+b) === value) {
          var num1 = a;
          var num2 = b;
          isAdd = true;
          break;
        }
    }
  }
  console.log(`Your Solution is`);
  if(isAdd){
    arr.splice(0, arr.length, num1, num2);
    //console.log(arr);
  }
}

findSum(newArr,81);