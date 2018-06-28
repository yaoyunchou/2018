---
title: HTML回到顶部
author: alicie
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
# HTML回到顶部

## HTML代码

```html
<p id="back-to-top" class="back-to -top">< a href=" ">返回顶部</ a></p >

```

## CSS代码

```css
p.back-to-top{
    //美化样式，可以根据需要更改
    width:80px;
    height:80px;
    color:#ffffff;
    background:#333333;
}
p#back-to-top{
    position:fixed;
    display:none;
    bottom:100px;
    right:80px;
}
```

## js代码

```javascript
$(function(){
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(1500);
            }
            else
            {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 100);//动画效果
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 100);
            return false;
        });
    });
});
```

** 需要引入jQuery文件 **