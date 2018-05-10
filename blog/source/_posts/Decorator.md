---
title: 修饰器
tags: 
- 前端
- js
categories: 
- 前端
disqus:
  enable: false
  shortname:
  count: true
---



## 修饰器

### 修饰器的参数
  1 修饰器函数的第一个参数，就是所要修饰的目标类。
  

 





### 注意事项
  1 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。
  2 如果想添加实例属性，可以通过目标类的prototype对象操作。
<!--more-->

  ```javascript
    // mixins.js
    export function mixins(...list) {
      return function (target) {
        Object.assign(target.prototype, ...list)
      }
    }

    // main.js
    import { mixins } from './mixins'

    const Foo = {
      foo() { console.log('foo') }
    };

    @mixins(Foo)
    class MyClass {}

    let obj = new MyClass();
    obj.foo() // 'foo'
  ```

