$(function(){
       
  // 如果不支持placeholder，用jQuery来完成
  if(!isSupportPlaceholder()) {
    // 遍历所有input对象, 除了密码框
    $("input[type='text']").each(
      function() {
        var self = $(this);
        var val = self.attr("placeholder");
        var myval=self.val();
       if(val!=undefined){
          input(self, val,myval);
        }
      }
    );
    
    /**//* 对password框的特殊处理
     * 1.创建一个text框 
     * 2.获取焦点和失去焦点的时候切换
     */
    $('input[type="password"]').each(
      function() {
        var pwdField    = $(this);  
        var pwdVal      = pwdField.attr('placeholder');  
        var pwdId       = pwdField.attr('id');  
    var pwdClass  = pwdField.attr('class');
    //alert(pwdClass)
        // 重命名该input的id为原id后跟1
        pwdField.after('<input id="' + pwdId +'1" type="text" value="'+pwdVal+'" class="'+pwdClass+'"  autocomplete="off"  />');  
        var pwdPlaceholder = $('#' + pwdId + '1');  
    pwdPlaceholder.css({color:"#999"});
        pwdPlaceholder.show();  
        pwdField.hide();  
          
        pwdPlaceholder.focus(function(){  
          pwdPlaceholder.hide();  
          pwdField.show();  
          pwdField.focus();  
        });  
          
        pwdField.blur(function(){  
          if(pwdField.val() == '') {  
            pwdPlaceholder.show();  
            pwdField.hide();  
          }  
        });  
      }
    );
  }
         


})


// 判断浏览器是否支持placeholder属性
function isSupportPlaceholder() {
  var input = document.createElement('input');
  return 'placeholder' in input;
}

// jQuery替换placeholder的处理
function input(obj,val,myval) {

  var $input = obj;
  var val = val;
  if(myval==""){
      $input.attr({value:val});
      $input.css({color:"#999"});
  }

  $input.focus(function() {
    if ($input.val() == val) {
      $(this).attr({value:""}); 
    } 
  }).keyup(function() {   
      $(this).css({color:"#333"});

  }).blur(function(){
    if ($input.val() == "") {
       $(this).attr({value:val});
       $(this).css({color:"#999"});

      }

  });
}
