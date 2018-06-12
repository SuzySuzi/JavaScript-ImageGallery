//实现图片替换 
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) { return false; }
    var source = whichpic.getAttribute("href"); //获取whichpic对象的链接属性
    var placeholder = document.getElementById("placeholder"); //获取placeholder对象
    if (placeholder.nodeName != "IMG") { return false; } //检测IMG是否存在
    placeholder.setAttribute("src", source); //用whichpic对象的链接替换placeholder对象原本的链接

    if (document.getElementById("discription")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; //检测tittle是否存在
        var discription = document.getElementById("discription");
        if (discription.firstChild.nodeType == 3) {
            discription.firstChild.nodeValue = text;
        }
    }
    return true;
}

//调用showPic
function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById) { return false; }
    if (!document.getElementById("imagegallery")) { return false; }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this); //假设showPic显示true，onclink返回false，浏览器禁止默认action
        }
        links[i].onkeypress = links[i].onclick;//Tab、Enter
    }
}


function addLoadEvent(func) {
    var oldonload = window.onload; //现有的window.onload事件处理函数的值存入变量
    // if (typeof window.onload != 'function') { //如果这个处理函数上未绑定任何函数，添加新函数;Q：typeof window.onload 显示是object
    if (typeof window.onload != 'object') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// 用来练习的函数，和图片库项目无关
function countBodyChildren() { //统计文档中的元素个数
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function popUp(winurl) { //打开新窗口
    window.open(winurl, "popup", "width=320,height=480");
}

function preparelinks() { //渐进增强的实现点击链接打开新窗口
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}