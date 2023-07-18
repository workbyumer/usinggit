function circularArrayRotation() {
  // Write your code here
  const a = [3, 4, 5];
  k = k % a.length;
  for (let i = 1; i <= k; i++) {
    let temp = a.pop();
    a.unshift(temp);
  }
  console.log(a);
}

circularArrayRotation();
