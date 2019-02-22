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
  
* 展開運算符用來複製物件  
  <pre><code>
  let obj1 = { name: 'foo', x: 10 };
  let obj2 = { name: 'test', y: 20 };

    // 複製物件
    let clonedObj = { ...obj1 };
    console.log(clonedObj);  // { name: 'foo', x: 10 }

    // 合併串聯多個物件
    // 與陣列不同的是: 有相同屬性名的，合併後只會使用最後一個物件的內容值
    var mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj);  // { name: 'test', x: 10, y: 20 }
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
  https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/
  
2. VS Code推薦安裝
* Reactjs snippets
  *React快速指令*
  
3. Packages
* Create React App
    <pre><code>
    npx create-react-app my-app
    cd my-app
    npm start
    </code></pre>
    
* axios  
 *Promise based HTTP client for the browser and node.js*
 <pre><code>
    $ npm install axios
 </code></pre>
 
* ReactRouter  
   <pre><code>
    npm install react-router
    yarn add react-router
  </code></pre>
  https://reacttraining.com/react-router/core/guides/quick-start

* postcss

* Redux
  <pre><code>
   yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk history
  </code></pre>
  
4. 參考  
[騰訊雲開法者手冊] [1]  
[ES6手冊] [2]  
[ReactJs生命週期] [3]  
[webpack4全家桶] [4]  

  [1]: https://cloud.tencent.com/developer/devdocs        "騰訊雲開法者手冊"
  [2]: https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/  "ES6手冊"
  [3]: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ "ReactJs生命週期"
  [4]:https://segmentfault.com/a/1190000017048871 "webpack4全家桶"
  
5.  生命週期  
    5.1 Constructor  
        [Do]spuer(props); //呼叫繼承的父類別  
        [Suggest]設定初始化state EX: this.state={count:0}  
        [Suggest]綁定自定義函式 EX: this.hancleClick=this.handleClick.bind(this);   
        [DONOT] 不要setState  
        [DONOT] 不要指定props到State裡面 ，除非想達到上層傳來的props指生效一次  
        [DONOT] 不要呼叫ajax函式  
    5.2 Render渲染  
        [DO] 讀取this.props/this.state  
        [DO] 回傳一個jsx元素  
        [DONOT] 不要使用this.setState==>會導致毀滅性的結果  
        [DONOT] 不要呼叫ajax函式  
    5.3 ComponentDidMount  
        畫面第一次載入呼叫此函式
        [DO] 呼叫ajax函式 
        <pre><code>
        componentDidMount(){
            this.fetchList();
        }
        fetchList= async()=>{
            const response = await feach("htttp://.....");
            const data= await response.json();
            this.setState({item:data});
        }
        </code></pre>
        <pre><code>
        ref=createRef();
        componentDidMount(){
            const ctx=this.ref.current.get.context('2d');
            ctx.fillStyle='red';
            ctx.fillRect(10,10,30,30);
        }
        render(){
            return <canvas ref={this.ref}/>;
        }        
        </code></pre>
    5.4 ComponentDidUpdate
        組件props/state更新時就會呼叫此函式
        <pre><code>
        state={
            userData:{},
        }
        componentDidMount(){
            this.fetchUser(this.props.userID);
        }
        componentDidUpdate(prevProps,pervState,snapshot){
            //condition !!!
            if(prevProps.userID!==this.props.ID){
                this.fetchUser(this.props.userID);
            }
        }
        fetchUser =(userID)=>{
            fetch(`http://xxxxxx/$(userID)`)
            .then(response=>response.json)
            .then((data)=>{
                this.setStats({
                    userData:data,
                })
            });
        }
        </code></pre>
    5.5  ComponentWillUnmount
        取消監聽事件/取消ajax/取消timeout
        window.removeEventListener
        clearTimeout
6. Redux
   https://chentsulin.github.io/redux/index.html
    
   redux-observable


https://juejin.im/post/5b52a840f265da0fb0186cab
