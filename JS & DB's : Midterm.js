var n = prompt(Math.sqrt("Enter an integer:"));
//initailize vars
var i = 2 , isPrime = true

while (i<=n && isPrime == true){
  if (n % i == 0){
    isPrime = false;
  }
  if (n % i != 0)
    i++;
}
if (isPrime == true){
  alert(n+" is prime")
} else {
  alert(n+" is not prime")
}
