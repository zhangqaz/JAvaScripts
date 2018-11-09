//JS   for in 遍历对象与数组

//遍历对象
let obj = {
    q: '8',
    w: '2',
    e: '4',
    t: '99'
}
//for in 遍历对象   key为对象的属性名称,遍历属性值时用[]
//通过[]操作符为对象添加属性或访问属性时,属性名称可以是任何字符

for (let key in obj) {
    console.log('obj的key:', key, 'obj的value');
}


let arr = [9, 5, 2, 7, 3, 4];
//for in 遍历数组
for (let key in arr) {
    console.log('arr的索引:', key, '。arr本身', arr);
}

// 操作数组的方法还有[].map, [].filter等
// 使用map， forEach对数组进行迭代时不能中断。 是对数组的所有元素进行操作。
// 如果需要判断跳出迭代时， 用普通的for循环效果更佳。