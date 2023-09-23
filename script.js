// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (i = 0, i; i < 101; i += 2) {
  console.log(i);
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var i = 1;
while (i < 101) {
  console.log(i);
  i += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
i = 1;
do {
  for (i; i < 101; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
} while (i < 97);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (i = 2; i < 101; i++) {
  isprime = true;
  for (j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      isprime = false;
    }
  }
  if (isprime) {
    console.log(i);
  }
}
