/**
 * 箭头函数的的用法
 * 1、箭头函数影响了this的作用域 
 * 2.箭头函数自动return(返回)
 */

/**
 * 普通的函数
 */
function arrow(val){
	return val+2;
}
arrow(2);
return 4

/**
 * 使用箭头函数
 */
let arrow=(val)=>{
	console.log("val",val+2);
	val+2;
}
arrow(2);
//return 4

/**
 * 这里的this 绑定到new的一个新的对象,并且赋值给了a,
 */
 function counter(){
	 this.num=0;
	console.log("this",this)//这里的this绑定到new的一个新对象上,他的值也会赋到新的对象上
 }
let a=new counter();
console.log(a.num);

/**
 * Counter方法会打印number类型NaN
 * 这个方法相等价于add函数写在外边，然后调用,没有传值
 * function  函数的this，执行运行时的
 */
// function Counter() {
//   this.num = 0;
//   this.timer = setInterval(function add() {
//     this.num++;
//     console.log(this.num);
//   }, 1000);
// }
function add(num) {
    num++;
    console.log(num);
 }
function Counter(){
	this.num=0;
	this.timer=setInterval(function(){
		add();
	},1000)
}
var b = new Counter();


/**
 * arrow箭头函数的this指向的是定义时的,this绑定在了新建的对象上
 */

function arrowData(){
	this.num=0;
	this.timer=setInterval(()=>{
		this.num++;
		console.log('this指向的是定义是的值',this.num);
	},1000)
}
let c=new arrowData();



