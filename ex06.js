// const add2 = x => x + 2

// function twice(f, x) {
//   return f(f(x))
// }

// const result = twice(add2, 10)
// console.log(result) //=> 14

// const add2 = x => x * 100 // 引数xに2を足す関数
// const mul2 = x => x - 5 // 引数xに2を掛ける関数

// const n = 3
// console.log(add2(n)) //=> 5
// console.log(mul2(n)) //=> 6
// console.log(mul2(add2(n))) //=> 10（3に2を足してから、その結果に2を掛ける）

// const add2 = x => (x + 3) * 8 // 引数xに2を足す関数
// const mul2 = x => x + 3 // 引数xに2を掛ける関数

// const n = 3
// console.log(add2(n)) //=> 5
// console.log(mul2(n)) //=> 6
// console.log(mul2(add2(n))) //=> 10（3に2を足してから、その結果に2を掛ける）

// 
// const items = [
//     // ここを埋める
//     {n:100},
//     {a:{b:['abc']}, c:{100:'foobar'}} 
//   ]
  
//   console.log(items[0].n) //=> 100
//   console.log(items[1].a.b[0]) //=> abc
//   console.log(items[1].c['100']) //=> foobar

// const items = [
//     // 日  月  火  水  木  金  土
//       [14, 93, 89, 51, 85, 59, 33],
//       [69, 27, 40, 76, 25, 21, 55],
//       [55, 60,  3, 28, 49,  5, 91],
//       [19, 56, 92, 66, 53, 80, 13],
//     ]
    
//     const sums = items.map((item) => {
//       // ここを埋める
//       let sum = 0
//       for(let i=0; i<item.length; i++){
//           sum += item[i]
//       }
//       return sum;
//     })
//     console.log(sums) //=> [424, 313, 291, 379]

// const str = 'This is a pen.'

// console.log(str.slice(1, 3)) //=> his
// console.log(str.slice(8, 13)) //=> a pen


// function cointoss() {
//     const num = Math.random() // numは0.0〜1.0のランダムな数値
//     if( num > 0.5) {
//         console.log('おもて')
//     }else{
//         console.log('うら')
//     }
//     return num
//     // ①ここを埋める
//   }
//   for(let i =0; i < 10; i++){

//       cointoss()
//   }
  
  

