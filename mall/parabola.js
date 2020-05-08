var funParabola = function(element, target, options) {
/*
* ��ҳģ����ʵ��Ҫһ��������
* �������1���ؾ���1�����㣬��Ȼ�����ʣ���Ϊҳ�涯�����ͼ�������
* ҳ���ϣ����Ƿ��������壬200~800����֮�䣬���ǿ���ӳ��Ϊ��ʵ�����2�׵�8�ף�Ҳ����100:1
* ������������û�жԴ��������֣���˲�������
*/
var defaults = {
speed: 166.67, // ÿ֡�ƶ������ش�С��ÿ֡�����ڴ󲿷���ʾ������Լ16~17����
curvature: 0.001, // ʵ��ָ���㵽׼�ߵľ��룬����Գ�������ʣ�����ģ��������������ߣ�����ǿ������µ�
progress: function() {},
complete: function() {}
};
var params = {}; options = options || {};
for (var key in defaults) {
params[key] = options[key] || defaults[key];
}
var exports = {
mark: function() { return this; },
position: function() { return this; },
move: function() { return this; },
init: function() { return this; }
};
/* ȷ���ƶ��ķ�ʽ
* IE6-IE8 ��marginλ��
* IE9+ʹ��transform
*/
var moveStyle = "margin", testDiv = document.createElement("div");
if ("oninput" in testDiv) {
["", "ms", "webkit"].forEach(function(prefix) {
var transform = prefix + (prefix? "T": "t") + "ransform";
if (transform in testDiv.style) {
moveStyle = transform;
}
});
}
// �������������Լ�����ȷ���˶����ߺ�����Ҳ����ȷ��a, b��ֵ��
/* ��ʽ�� y = a*x*x + b*x + c;
*/
var a = params.curvature, b = 0, c = 0;
// �Ƿ�ִ���˶��ı�־��
var flagMove = true;
if (element && target && element.nodeType == 1 && target.nodeType == 1) {
var rectElement = {}, rectTarget = {};
// �ƶ�Ԫ�ص����ĵ�λ�ã�Ŀ��Ԫ�ص����ĵ�λ��
var centerElement = {}, centerTarget = {};
// Ŀ��Ԫ�ص�����λ��
var coordElement = {}, coordTarget = {};
// ��ע��ǰԪ�ص�����
exports.mark = function() {
if (flagMove == false) return this;
if (typeof coordElement.x == "undefined") this.position();
element.setAttribute("data-center", [coordElement.x, coordElement.y].join());
target.setAttribute("data-center", [coordTarget.x, coordTarget.y].join());
return this;
}
exports.position = function() {
if (flagMove == false) return this;
var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// ��ʼλ��
if (moveStyle == "margin") {
element.style.marginLeft = element.style.marginTop = "0px";
} else {
element.style[moveStyle] = "translate(0, 0)";
}
// �ı�Ե������
rectElement = element.getBoundingClientRect();
rectTarget = target.getBoundingClientRect();
// �ƶ�Ԫ�ص����ĵ�����
centerElement = {
x: rectElement.left + (rectElement.right - rectElement.left) / 2 + scrollLeft,
y: rectElement.top + (rectElement.bottom - rectElement.top) / 2 + scrollTop
};
// Ŀ��Ԫ�ص����ĵ�λ��
centerTarget = {
x: rectTarget.left + (rectTarget.right - rectTarget.left) / 2 + scrollLeft,
y: rectTarget.top + (rectTarget.bottom - rectTarget.top) / 2 + scrollTop
};
// ת�����������λ��
coordElement = {
x: 0,
y: 0
};
coordTarget = {
x: -1 * (centerElement.x - centerTarget.x),
y: -1 * (centerElement.y - centerTarget.y)
};
/*
* ��Ϊ����(0, 0), ���c = 0
* ���ǣ�
* y = a * x*x + b*x;
* y1 = a * x1*x1 + b*x1;
* y2 = a * x2*x2 + b*x2;
* ���õڶ������꣺
* b = (y2+ a*x2*x2) / x2
*/
// ����
b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x;
return this;
};
// ������������˶�
exports.move = function() {
// ��������˶���û�н���������ִ���µ��˶�
if (flagMove == false) return this;
var startx = 0, rate = coordTarget.x > 0? 1: -1;
var step = function() {
// ���� y'=2ax+b
var tangent = 2 * a * startx + b; // = y / x
// y*y + x*x = speed
// (tangent * x)^2 + x*x = speed
// x = Math.sqr(speed / (tangent * tangent + 1));
startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent + 1));
// ��ֹ����
if ((rate == 1 && startx > coordTarget.x) || (rate == -1 && startx < coordTarget.x)) {
startx = coordTarget.x;
}
var x = startx, y = a * x * x + b * x;
// ��ǵ�ǰλ�ã������в���ʹ�õ����ɣ�ʵ��ʹ�ÿ��Խ���һ��ע��
element.setAttribute("data-center", [Math.round(x), Math.round(y)].join());
// x, yĿǰ�����꣬��Ҫת���ɶ�λ������ֵ
if (moveStyle == "margin") {
element.style.marginLeft = x + "px";
element.style.marginTop = y + "px";
} else {
element.style[moveStyle] = "translate("+ [x + "px", y + "px"].join() +")";
}
if (startx !== coordTarget.x) {
params.progress(x, y);
window.requestAnimationFrame(step);
} else {
// �˶��������ص�ִ��
params.complete();
flagMove = true;
}
};
window.requestAnimationFrame(step);
flagMove = false;
return this;
};
// ��ʼ������
exports.init = function() {
this.position().mark().move();
};
}
return exports;
};
/*! requestAnimationFrame.js
* by zhang
*/
(function() {
var lastTime = 0;
var vendors = ['webkit', 'moz'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
window[vendors[x] + 'CancelRequestAnimationFrame'];
}
if (!window.requestAnimationFrame) {
window.requestAnimationFrame = function(callback, element) {
var currTime = new Date().getTime();
var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
var id = window.setTimeout(function() {
callback(currTime + timeToCall);
}, timeToCall);
lastTime = currTime + timeToCall;
return id;
};
}
if (!window.cancelAnimationFrame) {
window.cancelAnimationFrame = function(id) {
clearTimeout(id);
};
}
}());