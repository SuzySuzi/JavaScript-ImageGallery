
//打算在页面加载完成后执行的函数，创建为一个队列
function addLoadEvent(func) {
    var oldonload = window.onload; //现有的window.onload事件处理函数的值存入变量
    // if (typeof window.onload != 'function') { //如果这个处理函数上未绑定任何函数，添加新函数;Q：typeof window.onload 显示是object
    if (typeof window.onload != 'object') { 
        window.onload = func;
    } else { //如果这个处理函数上绑定了函数，追加新函数
        window.onload = function (){
            oldonload();
            func();
        }
    }
}
