---
title: 未知宽高如何 水平垂直居中
author: yao
tags: 
- 前端
- css
categories: 
- 前端
disqus:
  enable: false
  shortname:
  count: true
---

# 未知宽高如何 水平垂直居中

## 第一种 css3的transform
```css
.ele{
/*设置元素绝对定位*/
    position:absolute;
/*top 50%*/
    top: 50%;
/*left 50%*/
    left: 50%;
/*css3   transform 实现*/
    transform: translate(-50%, -50%);
}
```

## 第二种 flex盒子布局

```css
.ele{
/*弹性盒模型*/    
    display:flex;
/*主轴居中对齐*/
    justify-content: center;
/*侧轴居中对齐*/    
    align-items: center;  
 }
```
第三种 display的table-cell  
```css
.box{
/*让元素渲染为表格单元格*/
    display:table-cell;
/*设置文本水平居中*/
    text-align:center; 
/*设置文本垂直居中*/
    vertical-align:middle;     
} 
```