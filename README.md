# ReactPractice
1.ES6
*箭頭函式(Arrow Functions)
  const func = (x) => x + 1
等同於
  const func = function (x) { return x + 1 }
  
 *綁定this值
 var self = this或.bind(this)
 可以改用箭頭函式:
  const obj = {a:1}
  function func(){
    setTimeout( () => { console.log(this) }, 2000)
  }
  func.call(obj)
  
  *展開運算符(Spread Operator)與其餘運算符(Rest Operator)
  展開運算符(Spread Operator)是把一個陣列展開(expand)成個別值，這個運算符後面必定接著一個陣列。最常見的是用來組合(連接)陣列
  const arr = [1,2,3]
  const arr2 = [...arr]

  *餘參數代表是將"不確定的傳入參數值們"在函式中轉變成為一個陣列來進行運算
  function sum(…numbers) {
    const result = 0

    numbers.forEach(function (number) {
      result += number
    })

    return result
  }
  sum(1) // 1
  sum(1, 2, 3, 4, 5) // 15
  
  *解構賦值(Destructuring Assignment)
