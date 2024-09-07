// N1
// {
//     function evenOrOdd(number) {
//         if (number % 2 === 0) {
//             return "Even"
//         } else
//             return "Odd"
//     }
//     console.log(evenOrOdd(5));
//     console.log(evenOrOdd(10));
// }


// N2

// {
//     function numberToString(num) {
//         return String(num)
//     }
//     console.log(numberToString("10"))
// }


// N3

// {
//     function opposite(number) {
//         return (-number)
//     }
//     console.log(opposite(1))
//     console.log(opposite(-1))
// }


// N4

// {
//     function makeNegative(num) {
//         if (num > 0) {
//             return -num;
//         }
//         return num;
//     }

//     console.log(makeNegative(10));
//     console.log(makeNegative(-10));
//     console.log(makeNegative(0));
// }


// N5

// {
//     function repeatStr(n, s) {
//         if (n < 0) {
//             throw new Error("Number of repetitions must be non-negative");
//         }
//         const result = s.repeat(n);
//         console.log("Result:", result);
//         return result;
//     }
//     repeatStr(5, "Hello ");
// }



// N6

// {
//     function saleHotdogs(n) {

//         if (n < 5) return n * 100;

//         else if (n < 10) return n * 95;

//         else return n * 90;
//     }
//     console.log(saleHotdogs(5));

// }



// N7

// {
//     function switchItUp(number) {
//         switch (number) {
//             case 0: return 'Zero';
//             case 1: return 'One';
//             case 2: return 'Two';
//             case 3: return 'Three';
//             case 4: return 'Four';
//             case 5: return 'Five';
//             case 6: return 'Six';
//             case 7: return 'Seven';
//             case 8: return 'Eight';
//             case 9: return 'Nine';
//         }
//     }

//     console.log(switchItUp(0));
//     console.log(switchItUp(1));
//     console.log(switchItUp(2));
//     console.log(switchItUp(3));
//     console.log(switchItUp(4));
//     console.log(switchItUp(5));
//     console.log(switchItUp(6));
//     console.log(switchItUp(7));
//     console.log(switchItUp(8));
//     console.log(switchItUp(9));
// }



// N8

// {
//     function yourFutureCareer() {
//         var career = Math.random();
//         if (career <= 0.32) {
//             return 'FrontEnd Developer';
//         } else if (career <= 0.65) {
//             return 'BackEnd Developer';
//         } else {
//             return 'Full-Stack Developer';
//         }
//     }
//     console.log(yourFutureCareer());
// }




// N9

// {
//     function hello() {
//         return "hello world!";
//     }
//     console.log(hello());
// }



// N10

// {
//     function findSmallestInt(arr) {
//         return Math.min(...arr);
//     }
//     console.log(findSmallestInt([34, 15, 88, 2]));
//     console.log(findSmallestInt([34, -345, -1, 100]));
// }