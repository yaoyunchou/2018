---
title: js的各种错误类型
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
## js的各种错误类型

### 1 syntaxError  语法错误
解析代码的时候发生错误
```javascript

    arr{}
//VM208:1 Uncaught SyntaxError: Unexpected token {

    arr = [1,&&]
    //VM237:1 Uncaught SyntaxError: Unexpected token &&
```

### 2 referenceError 引用错误
引用一个不存在的变量错误
```javascript
    console.log(a)
    // VM116:1 Uncaught ReferenceError: a is not defined
```
![image](https://qqadapt.qpic.cn/txdocpic/0/27ce8a1e1bb27e6a54ebb841d7137d39/0)
<!--more-->

### 3 RangeError 范围错误
超出范围

```javascript

```

### 4 TypeError 类型错误

```javascript
  'a'.rand()
//VM188:1 Uncaught TypeError: "a".rand is not a function

```


### 5 UrlError

```javascript

```

### 6 evalError

```javascript

```