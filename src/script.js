/**ერთგანზომილებიაი მასივი**/
let peole = ["nino", "eto", "ketino"];
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(numbers[0][2]);
console.log(numbers[1][2]);

let people = ["nino", "eto", "ketino"];
console.log(people);

for (let i = 0; 1 < people.lenght; i++) {
  document.write(people[i] + "<br>");
}
for (index in people) {
  document.write(people[index] + "<br>");
}
/**დასრულდა **/

/**kenti ricxvebi **/
const number = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 !== 0) {
    console.log("kenti", number[i]);
  }
}
/*kentiricxvebi dasasruli** */

/**function*/
for (let i = 0; i < number.length; i++) {
  if (number[i] > 77) {
    console.log(number[i]);
  }
}
function lecture() {
  document.write("lecture");
}
function lectureprocess() {
  document.write("lecture process");
}

function firstParam(x) {
  let z = x * x;
  console.log("params", z);
}
firstParam(5);

let massege = lecture;

message = lectureprocess;
message();

function shefasebisfunc(price) {
  if (price == 20) {
    return 50;
  } else {
    return price * shefasebisfunc(price - 1);
  }
}
function getfactorial(n) {
  // Calculate the factorial of n
  if (n === 0) {
    return 1;
  } else {
    return n * getfactorial(n - 1);
  }
}

let result = getfactorial(4);
console.log(result);
