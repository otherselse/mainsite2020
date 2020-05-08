function openDiv(options) {
	var _this = this;
	this.window = window;
	this.data = options.data || {};
	this.options = $.extend({autoOpen: true}, options);
	this.div = $("<div></div>").appendTo("body");
	this.frame = $("<iframe width=\"95%\" height=\"95%\" frameborder=\"0\"></iframe>").appendTo(this.div);
	this.frame.attr("src", options.url);
	this.div.attr("title", options.title);
	this.open = function() {
		this.div.omDialog("open");
	};
	this.closeChild = function() {
		this.div.omDialog("close");
	};
	if(options.callback) {
		this.callback = options.callback;
	} else {
		this.callback = function(obj) {};
	}
	var _onClose = this.options.onClose; 
	this.options.onClose = function(event) {
		if(_onClose) _onClose(event);
		this.frame.attr("src", "");
		_this.frame.remove();
		_this.div.remove();
	};
	this.dialog = this.div.omDialog(options);
	//设置iframe窗口的opener，便于在窗口内执行关闭方法
	window.callHandler = this;
	this.frame[0].contentWindow.opener = window;
	this.frame[0].contentWindow.handler = this;
	return this;
}

function closeDiv(obj) {
	var handler = window.handler || window.parent.callHandler || (window.opener ? window.opener.callHandler : null);
	if(handler) {
		handler.callback(obj);
		handler.closeChild();
	} else if(window.opener) {
	   window.opener.location = window.opener.location.href;
		window.close();
	}
}

function removeParentByClass(obj){
	obj.closest('.layer1').remove();
}

function CPos(x, y)
{   
    this.x = x;
    this.y = y;
}

function getLoading(){
	return "<img src='"+app.root+"/machining/images/loading.gif'  />";
}

function GetObjPos(ATarget)
{
    var target = ATarget;
    var pos = new CPos(target.offsetLeft, target.offsetTop);
    
    var target = target.offsetParent;
    while (target)
    {
        pos.x += target.offsetLeft;
        pos.y += target.offsetTop;
        
        target = target.offsetParent;
    }
    
    return pos;
}

function mask(handler) {
    handler.mask=$('<div class="gBlock" style="width:100%;height:100%;"><div align="center" class="gBlock-valignMiddle" ><div class="loadingImg" style="display:block"/></div></div>')
            .mousedown(function(e){
                return false;  //禁用双击（默认双击全把div下面的内容全选）
            })
            .hide();
    handler.append(handler.mask);
    handler.showMask = function() {
    	this.addClass("om-grid");
    	this.mask.show();
    };
    handler.hideMask = function() {
    	this.mask.hide();
    	this.removeClass("om-grid");
    };
}

//平排多级选择
function seltionContain(handler, options) {
	_this = this;
	this.options = {handler: handler};
	$.extend(this.options, options);
	this.options.identify = "seltionContain";
	if(this.options.handler.data(this.options.identify)) {
		return this.options.handler.data(this.options.identify);
	}
	this.options.handler.data(this.options.identify, this);
	this.options.handler.addClass("seltion");
	this.options.content = $("<div class=\"seltion-cont\"></div>").appendTo(this.options.handler);
	
	var _addChildren = function(data, item) {
		if(data && data.length > 0) {
			var handler = $("<dd class=\"posrelative w-area item-bag\"></dd>").appendTo(item);
			for(var i = 0;i < data.length; i++) {
				var cdata = data[i];
				var chtml = item.data.multiselect ? "<a href=\"#\" class=\"a-area\"><input type=\"checkbox\" value=\"" + cdata.value + "\" class=\"child\"/>" + cdata.name + "</a>"
						: "<a href=\"#\" class=\"a-area child\">" + cdata.name + "</a>";
				var child = $(chtml).appendTo(handler);
				child.data("d", cdata);
			}
		}
	};
	this.addItem = function(itemOption) {
		var item = $("<dl class=\"selitem selitem-area clearfix1\"></dl>");
		item.appendTo(this.options.handler);
		if(itemOption) {
			item.data("multiselect",itemOption.multiselect);
			if(itemOption.title) {
				$("<dt>" + itemOption.title + ":</dt>").appendTo(item);
			}
			if(itemOption.url) {
				$.ajax({
					url: itemOption.url,
					type: "get",
					data: itemOption.queryParam,
					dataType: "json",
					success: function(data, XmlRequest, textStatus) {
						this.itemOption.data = data;
						_addChildren(itemOption.data, item);
					},
					error: function(XmlRequest, textStatus, errorThrow) {
						alert(textStatus + ":" + errorThrow);
					}
				});
			} else if(itemOption.data) {
				_addChildren(itemOption.data, item);
			}
		}
	};
	var unselect = function(child) {
		var bag = child.parent();
		if(!bag.hasClass("item-bag")) bag = bag.parent();
		if(bag.hasClass("item-bag")) {
			if(bas.data.multiselect) child.attr("checked", false);
			else child.removeClass("a-circle-on");
		} 
	};
	var select = function(child) {
		var bag = child.parent();
		if(!bag.hasClass("item-bag")) bag = bag.parent();
		if(bag.hasClass("item-bag")) {
			if(bas.data.multiselect) {
				child.attr("checked", true);
			} else {
				bag.find(".a-circle-on").removeClass("a-circle-on");
				child.addClass("a-circle-on");
			}
		} 
	};
	var selectAll = function(bag) {
		if(bag.hasClass("item-bag")) {
			if(!bas.data.multiselect) return false;
			else handler.find("dd checkbox").attr("checked", true);
		}
	};
	var isSelected = function(child) {
		var bag = child.parent();
		if(!bag.hasClass("item-bag")) bag = bag.parent();
		if(bag.hasClass("item-bag")) {
			if(bas.data.multiselect) {
				return child.attr("checked");
			} else {
				return child.hasClass("a-circle-on");
			}
		}
		return false;
	};
	var _onSelect = function(data) {
		if(_this.options.onSelect) _this.options.onSelect(data);
		alert(data.value);
	};
	this.options.handler.find("dd > .child").live('click', function(e) {
		var child = $(this);
		var bag = child.parent();
		if(!bag.hasClass("item-bag")) bag = bag.parent();
		if(!bag.data.multiselect) { //如果是checkbox会自动勾选上
			//没有取消选择的情况
			bag.find(".a-circle-on").removeClass("a-circle-on");
			child.addClass("a-circle-on");
		}
		_onSelect(child.data("d"));
	});
	
}

//
function getPosition(e, includeW, includeH) {
    var w = e.offsetWidth, h = e.offsetHeight;
    var x = e.offsetLeft, y = e.offsetTop;
    while (e = e.offsetParent) {
        x += e.offsetLeft;
        y += e.offsetTop;
    }
    if (includeW) x += w;
    if (includeH) y += h;
    return { x: x, y: y };
}

//钢厂选择面板 -- 触发器，钢厂显示标签， 保存钢厂id，保存钢厂名称
function gcObj(triger, label, ids, names) {
	var _this = this;
	this.triger = triger;	
	this.label = label;
	this.ids = ids;
	this.names = names;
	this.hasfocus = false;
	
	this.div = $("#div_gc");
    if(this.div.length == 0) {
    	this.div = $('<div id="div_gc" tabindex="0" class="om-gc-container"' +
    			'style="display: none; position: absolute; width: 200px;  outline-color: black;">' +
    			'<ul style="height: 50px; background-color: #ccc;">' +
    				'<li><input type="checkbox" id="all_gc" value="0"/>不限</li>' +
    				'<li><input type="checkbox" id="bg_gc" value="11"/>宝钢</li>' +
    				'<li><input type="checkbox" id="ag_gc" value="6"/>鞍钢</li>' +
    				'<li><input type="checkbox" id="mg_gc" value="51"/>马钢</li>' +
    				'<li><input type="checkbox" id="sg_gc" value="138"/>首钢</li>' +
    				'<li><input type="checkbox" id="rz_gc" value="65"/>日照</li>' +
    			'</ul>' +
    		'</div>');
    	$("body").append(this.div);
    	this.div = $("#div_gc");
    }
    /*$("body").bind('mousedown',tempEvent=function(){
    	if(!_this.hasfocus)_this.div.hide();
    });*/
	
	this.show = function(e) {
		if (e && e.target) {
	        var pos = getPosition(e.target, false, true);
	        _this.div[0].style.left = pos.x + "px";
	        _this.div[0].style.top = pos.y + "px";
	    }
		_this.div.is(":visible") ? _this.div.hide() : (function(){_this.div.show();_this.div.focus();_this.hasfocus = true;})();
	};
	
	this.div.blur(function(e){
		if(e.clientX || (window.event && window.event.clientX)) {
			//chrome没有这个属性,但是点击div内的控件不会失去焦点
			var x = event.clientX || window.event.clientX;
			var y = event.clientY || window.event.clientY;
			var divx1 = _this.div[0].offsetLeft;  
	        var divy1 = _this.div[0].offsetTop;  
	        var divx2 = _this.div[0].offsetLeft + _this.div[0].offsetWidth;  
	        var divy2 = _this.div[0].offsetTop + _this.div[0].offsetHeight; 
	        if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
	    		_this.div.hide();//_this.hasfocus = false;
	        }
		} else {
    		_this.div.hide();//_this.hasfocus = false;
		}
	});

	this.triger.click(this.show);

	this.div.find("input[type='checkbox']").change(function() {
		var all = $("#all_gc");
		if($(this).attr("id") == "all_gc") {
			if(all.is(":checked")) {
				_this.div.find("input[type='checkbox']").filter("#all_gc").attr("checked", false);
			}
		} else {
			if($(this).is("checked")) all.attr("checked", false);
		}
		var rs = "";
		var ids = "";
		if(all.is(":checked")) {
			rs = all.parent().text();
			ids = all.val();
		} else {
	    	var gcs = $("#div_gc").find("input:checked");
	    	if(gcs.length > 0) {
	        	for(var i = 0;i < gcs.length; i++) {
	        		rs += i == 0 ? gcs.eq(i).parent().text() : "," + gcs.eq(i).parent().text();
	        		ids += i == 0 ? gcs.eq(i).val() : "," + gcs.eq(i).val();
	        	}
	    	} else rs = "请选择";
		}
		_this.label.text(rs);
		if(_this.ids) _this.ids.val(ids);
		if(_this.names) _this.names.val(rs);_this.div.focus();
	});
}

/**
 * 弹出浮层，浮层上是checkbox
 * options.anchor 浮层弹出定位
 * options.data ：[{name,value},{},...]
 * options.identify : 标识
 */
function floatChecks(options) {
	var _this = this;
	this.options = {};
	$.extend(this.options, options);
	this.options.anchor = $(options.anchor);
	if(this.options.anchor.data(this.options.identify)) {
		return this.options.anchor.data(this.options.identify);
	}
	this.options.anchor.data(this.options.identify, this);
	var containHtml = '<div tabindex="' + Math.random() + '" class="float-checks-container"' +
					'style="display: none; position: absolute; width: 200px;  outline-color: black;">' +
					'<ul style="height: 50px; background-color: #dce;list-style:none;margin:2px auto;padding:6px 0 0 6px;border:1px solid #ccc; border-top-style:dotted;list-style:none;">' +
						(function(){
							var lis = "";
							if(_this.options.data && _this.options.data.length > 0) {
								var data = _this.options.data;
								for(var i = 0;i < data.length; i++) {
									lis += '<li style="float:left;display:inline;margin:0 0 0 0;"><input type="checkbox" value="' + data[i].value + '"/>' + data[i].name + '</li>';
								}
							}
							return lis;
						})() 
						+
						'</ul>' +
					'</div>';
	this.contain = $(containHtml);
	$("body").append(this.contain);
	
	this.show = function() {
		if (_this.options.anchor) {
	        var pos = getPosition(_this.options.anchor.get(0), false, true);
	        _this.contain.css("left", pos.x + "px");
	        _this.contain.css("top", pos.y + "px");
	    }
		_this.contain.is(":visible") ? _this.contain.hide() : (function(){_this.contain.show();_this.contain.focus();})();
	};
	
	this.hide = function() {
		_this.contain.hide();
	};
	
	this.contain.blur(function(e){
		if(e.clientX || (window.event && window.event.clientX)) {
			//chrome没有这个属性,但是点击div内的控件不会失去焦点
			var x = event.clientX || window.event.clientX;
			var y = event.clientY || window.event.clientY;
			var divx1 = _this.contain.css("offsetLeft");  
	        var divy1 = _this.contain.css("offsetTop");  
	        var divx2 = _this.contain.css("offsetLeft") + _this.contain.css("offsetWidth");  
	        var divy2 = _this.contain.css("offsetTop") + _this.contain.css("offsetHeight"); 
	        if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
	    		_this.contain.hide();
	        }
		} else {
    		_this.contain.hide();
		}
	});
	
	this.val = function(value) {
		if(value) {
			var values = value.split(",");
			var checks = _this.contain.find(":checkbox");
			for(var i = 0;i < values.length; i++) {
				checks.filter("[value=" + values[i] + "]").attr("checked", true);
			}
		} else {
			return _this.contain.find(":checkbox").val();
		}
	};
	
	this.text = function() {
		return _this.contain.find(":checkbox").text();
	};
}

//注册到消息服务器以接收来自服务器的消息
function RegisterMessageServer(user, userId, userName, deptId, deptment, compId, company, extension, ctiCode) {
    window.external.RegisterMessageServer(user, userId, userName, deptId, deptment, compId, company, extension, ctiCode);
}

/**
 * {\"User\":\"admin\",\"UserId\":null,\"UserName\":\"系统管理员\",\"DeptId\":null,
 * \"Deptment\":null,\"CompId\":null,\"Company\":null,\"Extension\":null,
 * \"CtiCode\":null,\"IP\":null,\"Port\":0}
 * @param json
 */
function RegisterMessageServer1(json) {
    window.external.RegisterMessageServer1(json);
}

//接收到服务器消息执行的方法
function MessageReceived(json) {
	if(window.doSearch) {
		window.doSearch();
	}
}

//格式化输出，避免null，undefined
function formatValue(value) {
	if(value != 0 && !value) return "";
	else return value;
}

//格式化输出，避免null，undefined
function formatFloat(value) {
	if(value != 0 && !value) return parseFloat("0");
	else return parseFloat(value);
}

function useIpMessage(callBack) {
	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function() {
		callBack(remote_ip_info);
	});
	//返回对象remote_ip_info 结构如下
	/*
	city: "上海"
	country: "中国"
	desc: ""
	district: ""
	end: "180.175.255.255"
	isp: "电信"
	province: "上海"
	ret: 1
	start: "180.152.0.0"
	type: ""
	*/
}
//获取ip信息，执行js回调被阻止
/* function getIpMessage(ipMessage) {
//{"ip":"180.166.177.98","pro":"上海市","city":"上海市","region":"","addr":"上海市 电信","regionNames":""}
alert("ip:" + ipMessage.ip);
}
$.getScript('http://whois.pconline.com.cn/ipJson.jsp?callback=getIpMessage', function(_result){
alert("收到信息");
}); */


function getCookie(Name) 
{ 
   $.post('EmOrderAction_getCookie.ajax','',function(data){
	  if(data.cookie) return data.cookie; 
   });
}

//单选效果
function checkSelection(cb, handler, idItem, nameItem) {
	handler.find(":checked").attr("checked", false);
	$(cb).attr("checked", true);
	idItem.val(cb.value);
	if(nameItem) nameItem.val(cb.name);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function imgChange1(obj,img){
	obj.src = img;
}

function imgChange(obj,img1,img2,img3,img4){
	obj.attr("src",img2);
	$("#img11").attr("src",img1);
	$("#img22").attr("src",img3);
	$("#img1").attr("src",img4);
}

function imgChange2(obj,img1,img2){
	obj.attr("src",img1);
	$("#img3").attr("src",img2);
}

function imgChange3(obj,img1,img2,img3,img4){
	obj.attr("src",img1);
	$("#img11").attr("src",img2);
	$("#img44").attr("src",img3);
	$("#img22").attr("src",img4);
}

String.prototype.Trim = function()  
{  
return this.replace(/(^\s*)|(\s*$)/g, "");  
}  
