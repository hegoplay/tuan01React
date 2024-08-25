// 1. Print numbers from 1 to 10
const quest1 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
// 2. Print the odd numbers less than 100
const quest2 = () => {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
};
// 3. Print the multiplication table with 7
const quest3 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
  }
};
// 4. Print all the multiplication tables with numbers from 1 to 10
const quest4 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
// 5. Calculate the sum of numbers from 1 to 10
const quest5 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }
};
// 6. Calculate 10!
const quest6 = () => {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result *= i;
  }
  console.log(result);
};
// 7. Calculate the sum of even numbers greater than 10 and less than 30
const quest7 = () => {
  let sum = 0;
  for (let i = 11; i < 30; i += 2) {
    sum += i;
  }
  console.log(sum);
};
// 8. Create a function that will convert from Celsius to Fahrenheit
const quest8 = (celsius) => {
  return celsius * 1.8 + 32;
};
// 9. Create a function that will convert from Fahrenheit to Celsius
const quest9 = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
// 10. Calculate the sum of numbers in an array of numbers
const quest10 = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};
// 11. Calculate the average of the numbers in an array of numbers
const quest11 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum *= i;

    sum += arr[i];
    sum *= i + 1;
  }
  return sum;
};
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
const quest12 = (arr) => {
  return arr.filter((num) => num > 0);
};
// 13. Find the maximum number in an array of numbers
const quest13 = (arr) => {
  return Math.max(...arr);
};
// 14. Print the first 10 Fibonacci numbers without recursion

const quest14 = () => {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  for (let i = 0; i < 10; i++) {
    console.log(fib[i]);
  }
};
// 15. Create a function that will find the nth Fibonacci number using recursion
const quest15 = (n) => {
  if (n == 0) {
    return { first: 0, second: 1 };
  }
  let p = quest15(n >> 1);
  let c = p.first * (p.second * 2 - p.first);
  let d = p.first * p.first + p.second * p.second;
  if (n % 2 === 0) {
    return { first: c, second: d };
  } else {
    return { first: d, second: c + d };
  }
};

// console.log(quest15(10).first);
// 16. Create a function that will return a Boolean specifying if a number is prime
const quest16 = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// 17. Calculate the sum of digits of a positive integer number
const quest17 = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

// 18. Print the first 100 prime numbers
const quest18 = (n = 100) => {
  let count = 0;
  let primes = [];
  let check = [];
  for (let i = 2; count < n; i++) {
    if (!check[i]) {
      primes.push(i);
      count++;
      for (let j = 2; j <= 1e6; j++) {
        if (i * j > 1e6) {
          break;
        }
        check[i * j] = true;
      }
    }
  }
//   primes.forEach((prime) => console.log(prime));
  return primes;
};
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 
const quest19 = (n, p) => {
  primes = quest18();
    let result = [];
    for (let i = 0; i < primes.length; i++) {
      if (primes[i] > n) {
        result.push(primes[i]);
        if (result.length === p) {
          break;
        }
      }
    }
    return result;
};
// console.log(quest19(100, 10));
// 20. Rotate an array to the left 1 position
const quest20 = (arr) => {
  let first = arr.shift();
  arr.push(first);
  return arr;
};
// 21. Rotate an array to the right 1 position
const quest21 = (arr) => {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
};
// 22. Reverse an array
const quest22 = (arr) => {
  return arr.reverse();
};
// 23. Reverse a string
const quest23 = (str) => {
  return str.split("").reverse().join("");
};
console.log(quest23("hello"));
// 24. Create a function that will merge two arrays and return the result as a new array
const quest24 = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const quest25 = (arr1, arr2) => {
    return [...arr1.filter((num) => !arr2.includes(num)),...arr2.filter((num) => !arr1.includes(num))]
};
// console.log(quest25([1,2,3],[2,3,4]));
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
const quest26 = (arr1, arr2) => {
    return arr1.filter((num) => !arr2.includes(num))   
}
console.log(quest26([1,2,3],[2,3,4]));