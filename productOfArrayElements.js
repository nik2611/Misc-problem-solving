let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (i = 0) {
    var product = arr[i];
  } else {
    product *= arr[i];
  }

  if (i == arr.length - 1) {
    console.log(product);
  }
}
