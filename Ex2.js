// Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      result.push(numbers[i])
    }
  }
  return result
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));