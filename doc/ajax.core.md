# 关于ajax跨域问题的整理

什么是ajax跨域问题?
前端调用后端接口不在同一个域,就会产生跨域问题.


---

1. 产生跨域的原因
    1. 浏览器的限制 
        浏览器出于安全的考虑,当他发现你的请求是跨域的时候,会做一些校验,如果校验不通过就会报跨域安全问题.(服务器还是可以接收到)
    2. 跨域 
        你发出去请求是跨域的协议、域名、端口任何一个不一样就是跨域的.
    3.  xhr(XMLHttpRequest)请求
        这里可以可以举例,我们知道img的src是可以用来做攻击的,我们可以把一个get类型的请求直接给src 如http://localhost:8080/get?name=yao ,如果给一个图片
        ```html

        <img src ="http://localhost:8080/get?name=yao" />
        ```
        这样的请求方式就不是XHR请求,这样的跨域是不被被报错的,因为浏览器没有去校验这个类型的请求,同样的道理,我们常见的一类跨域可以用from自己的action进行跨域,不过这个类型的跨域返回只能后天进行重定向.


2. 针对这个原因我们如何找到解决思路

    1. 浏览器
        1.禁止浏览器检验,用命令行进行
        ```node
        chrome --disable-web-security --user-data-dir=e:\temp3
        ```

    2. XHR 

    3. 跨域
        1. 被调用方
        2. 调用方  
