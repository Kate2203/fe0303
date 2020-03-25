// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n.
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

let n = prompt('Enter number for task 1');

function task1( n ) {
   // let i = 1;

   // while (i<=n) {
     //   console.log(i);

   //     i++; // i = i + 1;}
        for (let i=1; i<=n; i++) {
            console.log(i);
        }
    }
task1(n);
// task1(10);

function isSimple( a ) {
 //   for (let k = 2; k < a ; k++) {
        
 //       if (a % k === 0) {
 //          return false;
 //       }
  //  }

  //  return true;
    let k = 2;
    while ( k < a ) {
        if ( a % k ===0) {
            return false;
        } 
    k++;
  }
    return true;
}

// let m = 1;

// do {
//     console.log(m, isSimple(m));
//     m++;
// } while(m < 15);

let a = prompt('Enter number for task2');
function getSimple(a) {
 //   let m = 1;

 //   do {
 //       if (isSimple(m)) {
 //           console.log(m);
    //      }

 //       m++;
 //   } while (m <= a);
    for (let m=1; m<=a; m++) {
        if (isSimple(m)) {
            console.log(m);
        }
    m++;
    }
}
getSimple(a);

let p = prompt('Введите число для task3');
let k = prompt('Введите второе число, меньше первого для task3');
function getNumbersDeletedBy(p, k) {
    let m = 1;

   // while (m <= p) {
   //     if (m % k === 0) {
   //         console.log(m);
   //     }

   //     m++;
   // }
   do {
    if (m % k === 0) {
        console.log(m);
        }
    m++;
    }
    while (m <=p);
}

getNumbersDeletedBy(p, k);
