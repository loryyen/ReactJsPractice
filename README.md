# ReactPractice
1. ES6  
*   箭頭函式(Arrow Functions)  
    <pre><code>const func = (x) => x + 1</code></pre>
    等同於  
    
    <pre><code>const func = function (x) { return x + 1 }</code></pre>
  
* 綁定this值  
  var self = this或.bind(this)
  可以改用箭頭函式:
  
  <pre><code>
  const obj = {a:1}
  function func(){
    setTimeout( () => { console.log(this) }, 2000)
  }
  func.call(obj)
  </code></pre>
  
* 展開運算符(Spread Operator)與其餘運算符(Rest Operator)  
  展開運算符(Spread Operator)是把一個陣列展開(expand)成個別值，這個運算符後面必定接著一個陣列。最常見的是用來組合(連接)陣列  
  
  <pre><code>
  const arr = [1,2,3]
  const arr2 = [...arr]
  </code></pre>
  
* 餘參數代表是將"不確定的傳入參數值們"在函式中轉變成為一個陣列來進行運算  
    <pre><code>
  function sum(…numbers) {
    const result = 0
    numbers.forEach(function (number) {
      result += number
    })
    return result
  }
  sum(1) // 1
  sum(1, 2, 3, 4, 5) // 15
   </code></pre>
* 解構賦值(Destructuring Assignment)  
  基本用法:  
  
 <pre><code>
      const [a, b] = [1, 2] //a=1, b=2
 </code></pre>
  交換值:  
  
  <pre><code>
      const a = 1, b = 2;
      [b, a] = [a, b] //a=2, b=1
  </code></pre>
  從物件解構賦值(Object destructuring):  
  
  <pre><code>
      const { prop, prop2 } = { prop: 5, prop2: 10 } //prop = 5, prop2=10
  </code></pre>
  
* 模組系統  
  輸出  
  
  <pre><code>
  export const aString = 'test'
  function aFunction(param){
    return param * param
  }
  export default aFunction
  </code></pre>
  
  輸入  
  <pre><code>
  import aFunction, {aString} from './lib.js'
  </code></pre>
2. VS Code推薦安裝
* VS Code Reactjs snippets
  *React快速指令*
3. Create React App
