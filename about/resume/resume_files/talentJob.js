
var commCfig={};
var flaghande;
var resulthande;
//判断是否手机
$(function(){

	
    //判断是否手机,是手机的话 右侧的滚动条不要
	(function ($) {
            $.getUrlParam = function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]); return null;
            }
        })(jQuery);
    
    var args= $.getUrlParam('arg');             
    jumpwap(args);
    
	commCfig={"commPagePath":$('#pagePath').val(),"commIntype":$("#inType").val(),"commZoneName":$("#zoneName").val(),"commJotTypeName":$("#jotTypeName").val(),"commJobName":$("#jobName").val()} 


 //加载能力测评题目

    var zoneName = commCfig.commZoneName;
    var jotTypeName = commCfig.commJotTypeName;
    var jobName = commCfig.commJobName;
    var intype=commCfig.commIntype;
    if(intype==null||intype=='undefined'||intype==''){
    	messagelayer(4,"未找到相关校招或社招类型");
    	 location.href=commCfig.commPagePath + '/index.jsp';//返回乐刚网首页
    	return false;
    }else{
    	if(intype=='school'){
            if(zoneName==''|| jotTypeName==''||jobName==''){
            	messagelayer(4,"应聘岗位或工作地点未选择，请重新选择");
                location.href=commCfig.commPagePath + '/help/CampusRecruitment.html';
            }
        }else{
            if(zoneName==''|| jotTypeName==''||jobName==''){
            	messagelayer(4,"应聘岗位或工作地点未选择，请重新选择");
                location.href= commCfig.commPagePath +'/joinus/talentMain/talentIndex_new.html';
            }
        }
    	if(intype.indexOf("school")>-1){
 	        intype='school';
 	    }else{
 	        intype='society';
 	    }
    }
     $.ajax({
           type: "POST",
           url: commCfig.commPagePath + '/joinus/talentMain/addTalentExamLine.html',
           data:{"intype":intype},
           dataType: "html",
           success: function(data){
               $('#partTwo').html(data);
           }
      });


     //应刘佳任务单12798要求如果选择了是风控中心的合规专员，合规部主管，合规部经理
     //则将风控中心改为技术中心
     var jobTypeName=commCfig.commJotTypeName;
     var jobName=commCfig.commJobName;
     if(jobTypeName=='风控中心'){
         if(jobName=='合规专员'||jobName=='合规部主管'||jobName=='合规部经理'){
             $("#jotTypeName").val('技术中心');
         }
     }

    //用于温馨提示
    $(".tclose").live("click",function(){
        var tgct=$(this).parent();
        if(tgct.height()<=26){
            $(this).next().show();
            $(this).attr("class","tclose");
            tgct.attr("class","maintip");
            tgct.css("height","auto");
        }else{
            $(this).next().hide();
            $(this).attr("class","tclose tclosest");
            tgct.attr("class","maintip maintipst");
            tgct.css("height","26px");
        }
    });

 //==================个人信息部分================
    //文化程度    若没有勾选“未上过学”，则根据文化程度显示教育经历填写框。
    $("#educatedName").on("change",function(){
        var educationName=$("#educatedName").val();
        $(".bachelorRuleCose").hide();
        $(".edu_bachelor").find("input").val('');
        $(".edu_master").find("input").val('');
        $(".edu_master1").find("input").val('');
        $(".edu_doctor").find("input").val('');
        $("#bachelorRuleCoseValue").val('');
        if(educationName=="高中以下"){
            $("#upHighSchool").hide();
            $("#belowHighSchool").show();
            $("#upHighSchool").find("input").val(''); //清空高中以上的内容
            $("#upHighSchool").find("select").val('')//清空高中以上的内容
            $(".edu_doctor").hide();
            $(".edu_master").hide();
            $(".edu_master1").hide();
            $(".edu_bachelor").hide();
            $(".edu_doctor").parent().parent().hide();
        }else{
            $("#belowHighSchool").hide();
            $("#upHighSchool").show();
            $("#belowHighSchool").find("input").val('');//清空高中以下的内容
            if(educationName=="博士"){
                $(".edu_doctor").parent().parent().show();
                $(".edu_doctor").show();
                $(".edu_master").show();
                checkAndChange3();
                $(".edu_bachelor").show();
                $("#upHighSchool").find("tr[class^='upHighSchool_']").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level2']").show();
            }else if(educationName=="硕士"){
                $(".edu_doctor").parent().parent().show();
                $(".edu_doctor").hide();
                $(".edu_master").show();
                checkAndChange3();
                $(".edu_bachelor").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level1']").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level2']").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level3']").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level4']").show();
                $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level5']").hide();

            }else if(educationName=="成大"||educationName=="本科"||educationName=="大专"||educationName=="高中"){
                $(".edu_doctor").parent().parent().hide();
                $(".edu_doctor").hide();
                $(".edu_master").hide();
                $(".edu_bachelor").show();
                checkAndChange3();
                if(educationName=="成大"||educationName=="本科"){
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level1']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level2']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level3']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level4']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level5']").hide();
                }else if(educationName=="大专"){
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level1']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level2']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level3']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level4']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level5']").hide();
                }else if(educationName=="高中"){
                    $(".edu_doctor").hide();
                    $(".edu_master").hide();
                    $(".edu_bachelor").show();
                    checkAndChange3();
                    $(".edu_doctor").parent().parent().hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level1']").show();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level2']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level3']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level4']").hide();
                    $("#upHighSchool").find("tbody").find("tr[class='upHighSchool_level5']").hide();

                }
            }
        }
})

//教育经历学校
var _t,_foreginFlag=0;
$("#schoolselectform").find(".cdpclose").on("click",function(){
        if(_foreginFlag==1){
            $(_t).parents("tr").find(".schoolDomestic").hide();
            $(_t).parents("tr").find(".schoolTypeForegin").show();
        }else if(_foreginFlag==0){
            $(_t).parents("tr").find(".schoolDomestic").show();
            $(_t).parents("tr").find(".schoolTypeForegin").hide();
        }
    })

//=============================实习/兼职经历 || 工作履历======================

    // 无工作履历勾选框动作
    $("#experiencesCheckbox").live("click",function(){
        if(document.getElementById("experiencesCheckbox").checked){
            $("#checkExperienceOrNot").hide();
            $("#isWorking").val("1");
        }else{
            $("#checkExperienceOrNot").show();
            $("#isWorking").val("0");
        }
    });



        //添加工作履历
    $(".addExperiencesLine").live("click",function(){
        var addt=$("#experiencesDemo").html();
        $(this).before(addt);
        updateReason();
    });


    //离职原因
    $("input[name^='reason']").live("click",function(){
        var nameStr=this.name;
        var strStart= nameStr.substring(0,nameStr.indexOf("_"));
        var index = nameStr.substring(nameStr.indexOf("_"));
        if(this.checked){
            $(this).attr("checked","checked");
            if(strStart=="reason11"){
                $("#textReason"+index).css("display","");
            }
        }else{
            $(this).removeAttr("checked");
            if(strStart=="reason11"){
                $("#textReason"+index).css("display","none");
            }
        }
    });


  //=================================其他问题================================


    //招聘信息的渠道来源
    $(".selectact_infoSource").live("change",function(){
        var infoSource=$(this).val();
        if(infoSource=="其他"){
            $("#otherSource").css("display","");
            $("#otherSource_td").html("其他渠道")
        }else{
            $("#otherSource").css("display","none");
            $("#otherSource_td").html("")
        }
    });


//用于在公司 是否有家属关系人员  ，其他问题中
$(".selectact").live("change",function(){
        var ctdt=$(this).attr("ctdata");
        if($(this).val()=="1"){
            $('.'+ctdt).show();
            $(this).parent().prev(".pmore").show();
            $(this).parent().prev(".pmore").attr("class","pmore");
            $(this).parent().prev(".pmore").attr("title","收起");
        }else{
            $('.'+ctdt).hide();
            $(this).parent().prev(".pmore").hide();
            $(this).parent().prev(".pmore").attr("class","pmore pmorecs");
            $(this).parent().prev(".pmore").attr("title","展开");
        }
    });

    // 根据在公司的亲属类别动态加载与本人关系
    $(".selectact_relation").live("change",function(){
        var type=$(this).val();
        if(type=="0"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("家属姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
        }else if(type=="1"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("家属姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
            $(this).parent("td").next("td").children("select").append("<option value='丈夫' >丈夫</option>")
            $(this).parent("td").next("td").children("select").append("<option value='妻子' >妻子</option>")
            $(this).parent("td").next("td").children("select").append("<option value='儿子' >儿子</option>")
            $(this).parent("td").next("td").children("select").append("<option value='女儿' >女儿</option>")
            $(this).parent("td").next("td").children("select").append("<option value='父亲' >父亲</option>")
            $(this).parent("td").next("td").children("select").append("<option value='母亲' >母亲</option>")
            $(this).parent("td").next("td").children("select").append("<option value='祖父母' >祖父母</option>")
            $(this).parent("td").next("td").children("select").append("<option value='外祖父母' >外祖父母</option>")
        }else if(type=="2"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("亲属姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
            $(this).parent("td").next("td").children("select").append("<option value='兄弟' >兄弟</option>")
            $(this).parent("td").next("td").children("select").append("<option value='姐妹' >姐妹</option>")
            $(this).parent("td").next("td").children("select").append("<option value='伯(叔)父' >伯(叔)父</option>")
            $(this).parent("td").next("td").children("select").append("<option value='伯(叔)母' >伯(叔)母</option>")
            $(this).parent("td").next("td").children("select").append("<option value='姑姑' >姑姑</option>")
            $(this).parent("td").next("td").children("select").append("<option value='姑父' >姑父</option>")
            $(this).parent("td").next("td").children("select").append("<option value='舅舅' >舅舅</option>")
            $(this).parent("td").next("td").children("select").append("<option value='舅妈' >舅妈</option>")
            $(this).parent("td").next("td").children("select").append("<option value='姨妈' >姨妈</option>")
            $(this).parent("td").next("td").children("select").append("<option value='姨父' >姨父</option>")
            $(this).parent("td").next("td").children("select").append("<option value='其他' >其他</option>")
        }else if(type=="3"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("恋人姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
            $(this).parent("td").next("td").children("select").append("<option value='男朋友' >男朋友</option>")
            $(this).parent("td").next("td").children("select").append("<option value='女朋友' >女朋友</option>")
        }else if(type=="4"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("恋人姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
            $(this).parent("td").next("td").children("select").append("<option value='朋友' >朋友</option>")
        }else if(type=="5"){
            $(this).parent("td").next("td").children("select").empty();
            //$("#relation_lab").html("恋人姓名")
            $(this).parent("td").next("td").children("select").append("<option value='请选择' selected='selected'>请选择</option>")
            $(this).parent("td").next("td").children("select").append("<option value='其他' >其他</option>")
        }
    });


    //用于展开收起
    $(".rchead .pmore").live("click",function(){
        var tgct=$(this).parent().next();
        if(tgct.is(":visible")==false){
            tgct.show();
            $(this).attr("class","pmore");
            $(this).attr("title","收起");
        }else{
            tgct.hide();
            $(this).attr("class","pmore pmorecs");
            $(this).attr("title","展开");
        }
    });
    //用于展开收起
    $(".hdct .pmore").live("click",function(){
        var tgct=$(this).parent().parent().parent().next();
        if(tgct.is(":visible")==false){
            tgct.show();
            $(this).attr("class","pmore");
            $(this).attr("title","收起");
        }else{
            tgct.hide();
            $(this).attr("class","pmore pmorecs");
            $(this).attr("title","展开");
        }
    });

    //用于删除兼职经历等
    $(".removeline").live("click",function(){
        $(this).parent().parent().parent().parent().remove();
    });


    //不愿意交纳500元履约保证金理由
    $("div[id='noMoneyReason_Remark']").find("input[name^='noReason']").live("click",function(){
        var nameStr=this.name;
        if(this.checked){
            $(this).attr("checked","checked");
            if(nameStr=="noReason5"){
                $("#noMoneyReason_RemarkTxt").css("display","");
                $("#textNoReason").show();
                }
        }else{
            $(this).removeAttr("checked");
            if(nameStr=="noReason5"){
                $("#noMoneyReason_RemarkTxt").css("display","none");
                $("#textNoReason").hide();
            }
        }
    });



    //添加学习培训经历
    $(".addStudyOrTraining").live("click",function(){
        var addt=$("#studyOrTrainingDemo").html();
        $(this).before(addt);
    });


    //删除上传文件
    $(".removeline1").live("click",function(){
        $(this).parents("tr.skillsTR").remove();
    });


    //========================提交============================
    $(".formSubmit").click(function(){
        //乐刚人才简历-checkBaseInfo:基本信息校验
        if(!checkBaseInfo()){
            return;
        }
        var cardNoValidate = $("#cardNoValidate").val();
        if(cardNoValidate=="1"){
            alert("填写正确的18位身份证号码！");
            return;
        }else if(cardNoValidate=="2"){
            alert("该身份证不能注册系统，请联系管理员");
            return;
        }else if(cardNoValidate=="3"){
            alert("填写正确的18位身份证号码！");
            return;
        }else if(cardNoValidate=="4"){
            alert("您的人才信息已经存在！");
            return;
        }

        //乐刚人才简历-家庭状况校验
        if(!checkFamily()){
            return;
        }

        var educatedName = $("#educatedName").val();//文化程度
        if($('#educationCheckbox').prop('checked')){
            //若勾选未上过学，则不判断
        }else{
            //乐刚人才简历-教育经历校验
            if(!checkEducation()){
                return;
            }
        }

        //填写院校类型
        var stb=false;
        $("#pageForm .schoolType").each(function (){
            if(educatedName != "本科" && educatedName != "硕士" && educatedName != "博士"){
                return;
            }
            if(educatedName == "本科" && $(this).attr("schoolLevel")!="本科"){
                return true;
            }else if(educatedName == "硕士" && $(this).attr("schoolLevel")!="本科"
                                    && $(this).attr("schoolLevel")!="硕士"){
                return true;
            }else if(educatedName == "博士" && $(this).attr("schoolLevel")!="本科"
                                    && $(this).attr("schoolLevel")!="硕士"
                                    && $(this).attr("schoolLevel")!="博士"){
                return true;
            }
            if($(this).val()==""){
                alert("请选择院校类型");
                stb=true;
                return ;
            }
        });
        if(stb){
            return;
        }
        var selVal="";
        $("#pageForm .schoolType").each(function (){
            $(this).removeAttr("disabled");
            selVal = $(this).find(":selected").text();
            if($(this).parent(".schoolDomestic").css("display")=="none"){
                $(this).next().val("");
                $(this).parents("td").prev("td").find(".iscustom").val(1);
            }else{
                $(this).next().val(selVal);
            }

        });

        $("#pageForm .schoolSortID").each(function (){
            $(this).removeAttr("disabled");
            selVal = $(this).find(":selected").text();

            if($(this).parent(".schoolDomestic").css("display")=="none"){
                $(this).next().val("")
            }else{
                $(this).next().val(selVal);
            }
        });


        if($('#experiencesCheckbox').prop('checked')){
            //勾选无工作履历不做判断
        }else{
            //乐刚人才简历-工作履历校验
            checkExperiences();
            if(flaghande){//乐刚人才简历-工作履历flaghande为1有值的时候测判断
                return;
            }
            var bgz=$("#booleagz").val();//用来判断工作履历起止时间合法
            if(bgz=="-1"){
                alert("工作经历日期不符合要求");
                return;
            }
        }


        //乐刚人才简历-其他问题校验
        if(!qtwt()){
            return;
        }
        //乐刚人才简历-在公司是否有家属关系人员或有无犯罪记录或有无传染病史或重大疾病史校验
        if(!isfamilyChecker()){
        	return;
        }


        var ability_vote=$("#ability_vote").css("display");
        if(ability_vote!="none") {
            //个人能力测评
            var text1 = $("#runability").val();
            var text2 = $("#stressability").val();
            var text3 = $("#stressability").val();
            if (text1 == "" || text2 == "" || text3 == "") {
                alert("请选择能力测评答案！");
                return;
            }

            var type = $("#question_Cont").css("display")
            if (type == "none") {
                alert("请在上方【能力测评】项下进行答题！");
                setClickAll();//调用开始答题按钮事件
                return;
            }

            var bscontext = $("#bscontext").val();
            var b = 0;
            var status = $("#subResult2").css("display");//提交答案按钮是否显示
            $("#examContext").find("input[type=radio]").each(function () {
                var isced = $(this).attr("checked");
                if (isced == "checked") {
                    b++;
                }
            })

            if (b < 20 && status == "inline-block") {
                alert("请完成答题后再提交答案！");
                return;
            }

            if (bscontext == "" && status == "inline-block") {
                alert("请填写答题后再提交答案！");
                return;
            }
            if (bscontext == "请输入" && status == "inline-block") {
                alert("请填写答题后再提交答案！");
                return;
            }
        }
        var jp_zwpj=$("#jp_zwpj").css("display");
        if(jp_zwpj!="none"){
            //自我评价字数限制
            var reason=document.getElementById('selfEvaluation').value;
            if(reason.length>1){
                reason=reason.replace(/[\n\r]/gi,"<br/>") //替换回车符
                reason=reason.replace(/[ ]/g,"&nbsp;");     //替换空格符
                $("#textlength").html(reason);
            }
            if(reason == ""){
                alert("请填写自我评价");
                $("#selfEvaluation").focus();
                return;
            }
            $("#textHtml").val($("#textlength").html());
            if(reason.length>2000){
                alert("自我评价字数不能超过2000个");
                return;
            }
        }
        //修改list[index] 中的 index
        updateListMethod();
        //测试题是否成功
        searchSelfEvaluation();

    });


 })

function is_mobile() {
        var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
        var u = navigator.userAgent;
        if (null == u) {
            return true;
        }
        var result = regex_match.exec(u);
        if (null == result) {
            return false
        } else {
            return true
        }
    }
//判断是否手机
function jumpwap(args) {
        if (args != "t" && is_mobile()) {
            $(".rcwctsbox").hide();
        }
    }



window.onload=function(){
    var jotTypeName=$("#jotTypeName").val();
    if(jotTypeName=="加工中心"){
        document.getElementById("experienceForOther").innerHTML="";
        document.getElementById("experienceForOther1").innerHTML="";
    }else{
        document.getElementById("experienceForMachining").innerHTML="";
        document.getElementById("experienceForMachining1").innerHTML="";
    }
    //selectEducation();
}



//================================个人信息==================================

/*** 根据年龄和工作岗位判断是否必填工作履历，是否显示无工作履历勾选框  */
function checkAgeForExperiences(data){
        var returnAge;
        var strBirthdayArr=data.split("-");
        var birthYear = strBirthdayArr[0];
        var birthMonth = strBirthdayArr[1];
        var birthDay = strBirthdayArr[2];
        d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1;
        var nowDay = d.getDate();
        if(nowYear == birthYear){
            returnAge = 0;//同年 则为0岁
        }
        else{
            var ageDiff = nowYear - birthYear ; //年之差
            if(ageDiff > 0){
                if(nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay;//日之差
                    if(dayDiff < 0)
                    {
                        returnAge = ageDiff - 1;
                    }
                    else
                    {
                        returnAge = ageDiff ;
                    }
                }
                else
                {
                    var monthDiff = nowMonth - birthMonth;//月之差
                    if(monthDiff < 0)
                    {
                        returnAge = ageDiff - 1;
                    }
                    else
                    {
                        returnAge = ageDiff ;
                    }
                }
            }
            else
            {
                returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
            }
        }
        var appliedPosition=$("#jotTypeName").val();
        // 岗位分类为生产/加工且年龄大于等于25岁，不显示无工作履历勾选框
        if(returnAge>=25 && appliedPosition=="加工中心"){
            $("#workExperience").hide();   // 无工作履历勾选框隐藏
            document.getElementById("experiencesCheckbox").checked=false;  // 无工作履历勾选框设置为未勾选
            $("#checkExperienceOrNot").show(); // 显示工作履历
            $("#isWorking").val("0");
            $("#shanchu").hide();
        }else{
            $("#workExperience").show();
        }
}


function upLoadPortrait(id){
     if(id!=null&&id!=""){
            layer.open({
            type: 2,
            title: false,
            shadeClose: true,
            shade: 0.5,
            area: ['500px', '480px'],
            content:'uploadPortrait.html'
            });
       }else{
            alert("上传头像失败");
       }
}

/*//有无行业经验
function isTalent(obj){
	var $val=$(obj).val();
	if($val==="0"){
		$(".isTalent").show();
	}else{
		$(".isTalent").hide();
	}
}
function  setIsSkilled(obj){
	var $val=$(obj).val();
	if($val==="3"||$val==="4"){
		$("#isSkilledJP").val(1);
	}else{
	    $("#isSkilledJP").val(0);
	}
}*/

//高考分数 验证
     function checkAndChange1(){

         var reg=/^\d+$/;
         var countG1=$("#edu_bachelor").val();
         if(!reg.test(countG1)){
            alert('请输入数字');
            $("#edu_bachelor").val('');
            return;
         }
         var count=parseInt($("#edu_bachelor").val());
         if(count<0){
             alert('只能填写非负数字');
             $("#edu_bachelor").val('');
         }
         $("#edu_master").val('');
         $("#bachelorRuleCoseValue").val('');
         $(".bachelorRuleCose").hide();
     }

     //下拉切换输入
    function checkAndChange2() {
        var score = $("#edu_master_s").val();
        if(score==''){
            return;
        }else if(score==-1){
            $("#edu_master_s").css("display","none");
            $("#edu_master_i").css("display","block");
            $("#edu_master_s").removeClass("isuse");
            $("#edu_master_i").addClass("isuse")
        }else{
            $("#edu_master").val('');
            checkAndChange();
        }
    }

    //输入切换下拉
    function checkAndChange3() {
        $("#edu_master_i").css("display","none");
        $("#edu_master_s").css("display","block");
        $("#edu_master_i").removeClass("isuse");
        $("#edu_master_s").addClass("isuse");
        $("#edu_master").val('');
        $("#edu_master_s").val('');
        $("#edu_master_i").val('');
    }

//所在省市高考总分,折算750分数显示

     function checkAndChange(){

         var reg=/^\d+$/;
         var countG1=$(".edu_master1.isuse").val();
         if(!reg.test(countG1)){
            alert('请输入数字');
            $(".edu_master1.isuse").val('');
            return;
         }
         if(countG1==''){
           return;
         }
         var countG=parseInt(countG1);
         if(countG<0){
             alert('只能填写非负数字');
             $(".edu_master1.isuse").val('');
         }
         if($("#edu_bachelor").val()==''){
             alert('高考分数不能为空');
             $(".edu_master1.isuse").val('');
             $("#bachelorRuleCoseValue").val('');
             $(".bachelorRuleCose").hide();
             return;
         }
         var count=parseInt($("#edu_bachelor").val());

         if(count==''){
             alert('高考分数不能为空');
             $(".edu_master1.isuse").val('');
             $("#bachelorRuleCoseValue").val('');
             $(".bachelorRuleCose").hide();
             return;
         }
         if(count>countG){
             alert('填写高考分数不能大于所在省市高考分数');
             $("#edu_bachelor").val('');
             $(".edu_master1.isuse").val('');
             $("#bachelorRuleCoseValue").val('');
             $(".bachelorRuleCose").hide();
             return;
         }

         if(countG!=750){
            var countC=Math.round(750*count/countG);
            $("#bachelorRuleCoseValue").val(countC);
            $(".bachelorRuleCose").show();

         }
         if(countG==750){
           $("#bachelorRuleCoseValue").val('');
           $(".bachelorRuleCose").hide();
           }
         $("#edu_master").val(countG1);
     }


//身份证号码验证
function checkCardNo(cardno){
    if($.trim(cardno).length != 18){
        //alert("填写正确的18位身份证号码！");
        $("#cardNo").addClass("adderror");
        $("#cardNo").next(".addtip").html("填写正确的18位身份证号码！");
        $("#cardNo").next(".addtip").show();
        $("#cardNo").val("");
        $("#cardNoValidate").val("1");
        return false;
    }else{
        $("#cardNo").next(".addtip").html("");
        $("#cardNo").next(".addtip").hide();
        $("#cardNo").removeClass("adderror");
    }
    if($.trim(cardno)=="510108198103142718"){
        alert("该身份证不能注册系统，请联系管理员");
        $("#cardNoValidate").val("2");
        //$(obj).val('');
        return false;
    }
    //var reg = /^[0-9]*$/;.substring(0,cardno.length-1)
    var reg=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if(!reg.test(cardno)){
        //alert("填写正确的18位身份证号码！");
        $("#cardNo").next(".addtip").html("填写正确的18位身份证号码！");
        $("#cardNo").next(".addtip").show();
        $("#cardNo").addClass("adderror");
        $("#cardNo").val("");
        $("#cardNoValidate").val("3");
//      $(obj).focus();
        return false;
    }else{
        $("#cardNo").next(".addtip").html("");
        $("#cardNo").next(".addtip").hide();
        $("#cardNo").removeClass("adderror");
    }
    //查询当前号码是否已存在
    var url= commCfig.commPagePath +'/joinus/talentMain/searchTalentMainByCardNo2.html?talentMain.cardNo='+cardno;
    $.ajax({
        type:"post",
        url:url,
        dateType:"json",
        success:function(data){
            if(data.msg==-1){
            	messagelayer(2,"您的人才信息已经存在！");
                $("#cardNoValidate").val("4");
                return false;
            }else{
                $("#cardNoValidate").val("0");
                return true;
            }
        }
    })
}

//是否上海户口
function setAccount(obj){
    $("#idShowType").show();
    if($(obj).val()==="2"){
        $(".areaAccount").show();
        $(".idType").show();
        $(".idArea").show();

    }else{
        $(".idType").show();
        $(".idArea").hide();
        $(".areaAccount").hide();
        $(".areaScore").hide();
    }
}

//是否有上海居住证
function setScore(obj){
    if($(obj).val()==="1"){
        $(".areaScore").show();
    }else{
        $(".areaScore").hide();
    }
}

//教育经历开始时间
function setDduTimeStart(num){
    if(num==1){
       var id='#xxjyStartDate';
    }else if(num==2){
       var id='#czjyStartDate';
    }else if(num==3){
       var id='#gzjyStartDate';
    }else if(num==4){
       var id='#dzjyStartDate';
    }else if(num==5){
       var id='#bkjyStartDate';
    }else if(num==6){
       var id='#ssjyStartDate';
    }else if(num==7){
       var id='#bsjyStartDate';
    }

    var obj={
        elem: id,
        format: 'YYYY-MM-DD',
        istime: true,
        istoday: true,
        start: laydate.now(),//开始日期
        choose:function(datas){}
        };
        laydate(obj);
 }


//教育经历结束时间
function setDduTimeEnd(num){
    if(num==1){
        var id='#xxjyStartDate';
        var id1='#xxjyEndDate';
        var notice='请先选择小学教育开始时间';
    }else if(num==2){
        var id='#czjyStartDate';
        var id1='#czjyEndDate';
        var notice='请先选择初中教育开始时间';
    }else if(num==3){
        var id='#gzjyStartDate';
        var id1='#gzjyEndDate';
        var notice='请先选择高中教育开始时间';
    }else if(num==4){
        var id='#dzjyStartDate';
        var id1='#dzjyEndDate';
        var notice='请先选择大专教育开始时间';
    }else if(num==5){
        var id='#bkjyStartDate';
        var id1='#bkjyEndDate';
        var notice='请先选择本科教育开始时间';
    }else if(num==6){
        var id='#ssjyStartDate';
        var id1='#ssjyEndDate';
        var notice='请先选择硕士教育开始时间';
    }else if(num==7){
        var id='#bsjyStartDate';
        var id1='#bsjyEndDate';
        var notice='请先选择博士教育开始时间';
    }

    var start=$(id).val();
    if(start==""||start==undefined){
        alert(notice);
        return;
    }
    start=start.substring(0,13)+":00:00";
    var obj={
        elem: id1,
        format: 'YYYY-MM-DD',
        istime: true,
        min: start,
        start:start,
        istoday: true,
        choose:function(datas){}
        };
    laydate(obj);
}



function searchSchools(obj){
    var provinceName = $(obj).val();
    $.post( commCfig.commPagePath + "/joinus/talentMain/searchSchoolsByProvinceName.html",{"provinceName":provinceName},function(schools){
        var html='';
        $("#school_name").html(html);
        $.each(schools,function(){
            html += '<option value="'+this.id+'" schoolType="'+this.schoolType
            +'" schoolSortID="'+this.schoolSortID+'">'+this.schoolName+'</option>';
        });
        /*html+='<option value="">暂无可选学校</option>';*/
        $("#school_name").append(html);
    });

}

function foreignSchool(obj,e){
    var index=$(obj).parent().find("a").index(obj);
    $("#schoolselectform").find(".cmplistc").hide();
    $("#schoolselectform").find(".cmplistc").eq(index).show();
    $(obj).parent().hide();

    if(arguments.length==2){
        $(_t).parents("tr").find(".schoolDomestic").hide();
        $(_t).parents("tr").find(".schoolTypeForegin").show();
        //$(_t).parents("tr").find(".schoolDomestic").find("input[type='hidden']").val('');
        _foreginFlag=1;
    }else if(arguments.length==1){
        _foreginFlag=0;
        $(_t).parents("tr").find(".schoolDomestic").show();
        $(_t).parents("tr").find(".schoolTypeForegin").hide();

    }

}

//学校国内国外学校
function setForeginSchool(obj){
    if(!$.trim($("#foreignSchoolCountry").val())){
            alert("请输入学校所在国家！");
            return;
    }
    if(!$.trim($("#foreignSchoolName").val())){
            alert("请输入学校名称！");
            return;
    }

    _t.value=$.trim($("#foreignSchoolName").val())+"("+$.trim($("#foreignSchoolCountry").val())+")";
    $(obj).parents(".cdpform").hide();
}


function setSchool(obj,event){
    var e = event || window.event;
    _t=e.target || e.srcElement;

    $(obj).prop("readonly",true);
    var _x=$(obj).offset().left-3;
    var _y=$(obj).offset().top;
    $("#schoolselectform").css({"left":_x,"top":_y});
    $("#schoolselectform").show();

    $("#schoolselectform").find(".cmplistc").hide();
    $("#schoolselectform").find(".selectSchool").show();
}

function getSchool(obj){

     var _tr = $(_t).parents("tr:first");
    _tr.find(".schoolType").removeAttr("disabled");
    _tr.find(".schoolSortID").removeAttr("disabled");
    var province = $("#school_province").val();
    if(!province){
        alert("请先选择省份");
    }
    _tr.find(".schoolProvince").val(province);
    var school_name = $("#school_name").val();
    if(!school_name){
        var inputSchool = $.trim($("#inputSchool").val());
        if(!inputSchool){
            alert("请输入学校名称！");
            return;
        }else{
            $.ajax({
                type:'post',
                url:commCfig.commPagePath+'/joinus/talentMain/checkIfExistByName.html',
                data:{'schoolName':inputSchool},
                dataType:'json',
                success:function (data){
                	var info=data.message;
                        if(info!='info'){
                            _t.value=inputSchool;
                            _tr.find(".iscustom").val(1);
                        }else{
                            _t.value=data.schoolName;
                            if(_t.value==''||_t.value=='undefined'){
                            	_t.value=inputSchool;
                            }
                            _tr.find(".schoolType").val(data.schoolType);
                            _tr.find(".schoolType").attr("disabled",true);

                            _tr.find(".schoolSortID").val(data.schoolSortID);
                            _tr.find(".schoolSortID").attr("disabled",true);
                            _tr.find(".iscustom").val(0);
                        }
                        $(obj).parents(".cdpform").hide();
                    }
            });

        }
    }else{

    	var selOption = $("#school_name").find("option:selected");

        _t.value=selOption.text()
        $(obj).parents(".cdpform").hide();

        _tr.find(".schoolType").val(selOption.attr("schoolType"));
        _tr.find(".schoolType").attr("disabled",true);

        _tr.find(".schoolSortID").val(selOption.attr("schoolSortID"));
        _tr.find(".schoolSortID").attr("disabled",true);
        _tr.find(".iscustom").val(0);
    }
}

function selectShool(obj){
    if(!$(obj).val()){
        $("#inputSchool").show();
    }else{
        $("#inputSchool").hide();
    }
}

/* 对省市区的修改 */
function getarea(){
        if($("#s_province").val()=="省份"){
            alert("请选择省份！");
            $("#s_province").focus();
            return;
        }

        if($("#s_city").val()=="地级市"){
            alert("请选择地级市！");
            $("#s_city").focus();
            return;
        }
        $('#areaselectform').next().val($('#s_province').find('option:selected').text()+'-'+$('#s_city').find('option:selected').text()+'-'+$('#s_county').find('option:selected').text());
        $('#areaselectform').remove();
    }





//==================工作履历 || 实习/兼职经历 ======================


function showNowDay(){
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "-";
        str += (mydate.getMonth()+1) + "-";
        str += mydate.getDate();
        return str;
}

//判断日期，时间大小
function compareTime(startDate, endDate) {
     if (startDate.length > 0 && endDate.length > 0) {
        var startDateTemp = startDate.split(" ");
        var endDateTemp = endDate.split(" ");
        var arrStartDate = startDateTemp[0].split("-");
        var arrEndDate = endDateTemp[0].split("-");
//      var arrStartTime = startDateTemp[1].split(":");
//      var arrEndTime = endDateTemp[1].split(":");
        var allStartDate = new Date(arrStartDate[0], arrStartDate[1], arrStartDate[2]);
        var allEndDate = new Date(arrEndDate[0], arrEndDate[1], arrEndDate[2]);

        if (allStartDate.getTime() > allEndDate.getTime()) {
    //      alert("startTime不能大于endTime，不能通过");
            return false;
        } else {
    //      alert("startTime小于endTime，所以通过了");
            return true;
        }
    } else {
        return false;
    }
}

//工作单位 起止年月限制
function validate(t,datas){
    var nowTime=showNowDay();
    if(!compareTime(datas,nowTime)){
        alert("所选日期时间不能大于当前日期");
        $("#boolea").val("-1");
    }else{
        $("#boolea").val("0");
        if(t==7){//工作履历
           // $("#startTime7").val(datas);
            var end=$("#endTime7").val();
            if(end!="" && !compareTime(datas,end)){
                //$("#startTime7").attr("value","");
                alert("开始日期不能大于结束日期");
                $("#booleagz").val("-1");
            }else{
                $("#booleagz").val("0");
            }
        }
        if(t==8){
            //$("#endTime7").val(datas);
            var start=$("#startTime7").val();
            if(start!="" && !compareTime(start,datas)){
                //$(this).attr("text","");
                alert("结束日期不能小于开始日期");
                $("#booleagz").val("-1");
            }else{
                $("#booleagz").val("0");
            }
        }
        if(t==9){
            //$("#startTime8").val(datas);
            var end=$("#endTime8").val();
            if(end!="" && !compareTime(datas,end)){
                //$("#startTime8").attr("value","");
                alert("开始日期不能大于结束日期");
                $("#booleagz").val("-1");
            }else{
                $("#booleagz").val("0");
            }
        }
        if(t==10){
           // $("#endTime8").val(datas);
            var start=$("#startTime8").val();
            if(start!="" && !compareTime(start,datas)){
               // $(this).attr("text","");
                alert("结束日期不能小于开始日期");
                $("#booleagz").val("-1");
            }else{
                $("#booleagz").val("0");
            }
        }

    }

}



//离职原因 id name 按照一定顺序如 quitRemark_0 quitRemark_1等
function updateReason(){
    var k=0;
    $(".experiencesTable").each(function(){
        if($(this).parent().attr("class") != "demo"){
            $(this).find("input[name^='reason']").each(function(i,obj){
                var nameStr = $(obj).attr("name");
                var strStart = nameStr.substring(0,nameStr.indexOf("_")+1);
                    nameStr = strStart+k;
                $(obj).attr("name",nameStr);
            });
            $(this).find("div[id^='textReason'],div[id^='txtQuitRemark'],input[id^='contextQuitRemark'],div[id^='quitRemark']").each(function(i,obj){
                var nameStr = $(obj).attr("id");
                var strStart = nameStr.substring(0,nameStr.indexOf("_")+1);
                    nameStr = strStart+k;
                $(obj).attr("id",nameStr);
            });
            k++;
        }
    });
}


//============================能力测评=============================
 var qhour=qminute=qsecond =0;//设置你要倒计时间
 var t;//声明倒计时
 var flag=0;//设置点击一次
function setClickAll(){  //点击开始答题

    if(!checkBaseInfo()){//乐刚人才简历-基本信息填写
        $("#question_Cont").hide();
        return;
    }
    //乐刚人才简历-家庭状况校验
    if(!checkFamily()){
    	 $("#question_Cont").hide();
        return;
    }
  //若勾选未上过学，则不判断
    var educatedName = $("#educatedName").val();//文化程度
    if($('#educationCheckbox').prop('checked')){
    }else{
        //乐刚人才简历-教育经历校验
        if(!checkEducation()){
           return;
        }
    }
    //勾选无工作履历不做判断
   if($('#experiencesCheckbox').prop('checked')){
    }else{
        //乐刚人才简历-工作履历校验
        checkExperiences();
        if(flaghande){//乐刚人才简历-工作履历flaghande为1有值的时候测判断
            return;
        }
        var bgz=$("#booleagz").val();//用来判断工作履历起止时间合法
        if(bgz=="-1"){
            alert("工作经历日期不符合要求");
            return;
        }
    }
    flag++;
    if(flag==1){
        alert("1-20题为单选，第21题为简答题。");
        $("#question_Cont").show();
        questionTime();
    }
}

function questionTime(){
    $("#question_Time").html(qhour+"时"+qminute+"分"+qsecond+"秒");//在一个输入框中显示时间
    $("#question_Time2").html(qhour+"时"+qminute+"分"+qsecond+"秒");//在一个输入框中显示时间
    //c=c-1;//重新赋值c
    qsecond = qsecond+1;
    if(qsecond==60){
        qsecond=0;
        qminute=qminute+1;
    }
    if(qminute==60){
        qminute=0;
        qhour=qhour+1;
    }
    t=setTimeout(function(){questionTime();},1000);//设置每秒运行一次函数e
    /*if(c<0){//er;
        clearTimeout(t);
        toRefreshChoiceValue();
    }else{//如果c小于0时，则退出
         t=setTimeout(function(){questionTime();},1000);//设置每秒运行一次函数e
         }*/
}

//提交答案
function startSumbit(){
     var b=0;
     $("#subResult2").removeAttr("onclick");
     $("#examContext").find("input[type=radio]").each(function(){
         var isced=$(this).attr("checked");
         if(isced=="checked"){
             b++;
            }
      });

    if(b<20){
        alert("请完成答题后再提交答案！");
        $("#subResult2").attr("onclick", "startSumbit()");
        return;
    }
    var bscontext=$("#bscontext").val();
        if(bscontext==""){
           alert("请填写答题后再提交答案！");
           $("#subResult2").attr("onclick", "startSumbit()");
           return;
        }

        if(bscontext=="请输入"){
            alert("请填写答题后再提交答案！");
            $("#subResult2").attr("onclick", "startSumbit()");
            return;
        }
        clearTimeout(t);
        toRefreshChoiceValue();
    }


function toRefreshChoiceValue(){
    //加载能力测评题目
    var intype=commCfig.commIntype;
    if(intype.indexOf("school")>-1){
       intype='school';
    }else{
       intype='society';
    }

    $.ajax({
        type: "POST",
        url: commCfig.commPagePath + '/joinus/talentMain/searchTalentExamLine.html',
        data:{"intype":intype},
        dataType: "html",
        success: function(data){
        $("#choiceLineListValue").html(data);
        $("input[data=choiceTypeValue]").each(function(){
            var vID=$(this).attr("dataID");
            var vValue=$(this).val();
            var vChoiceItem=$(this).attr("choiceItem");
            if (vValue==null||vValue==""){
                vValue=0;
            }
            $("#"+vChoiceItem+vID).attr("dataValue",vValue);
        })
        $("input[data=choiceTypeAnalyse]").each(function(){
            var vID=$(this).attr("dataID");
            var vValue=$(this).val();
            var vChoiceItem=$(this).attr("choiceItem");
            if (vValue!=null||vValue!=""){
                $("#analyse"+vChoiceItem+vID).html("&nbsp;&nbsp;("+vValue+")");
            }
        }) ;
        question_Sumbit();
        }
    });
}


function question_Sumbit(){
    var sum=0;
    var steelRemark=$("#bscontext").val();
    $("#steelRemark").html(steelRemark);
    $("#ability_content").find("input[type='radio']:checked").each(function(){
        var v=parseFloat($(this).attr("datavalue"));
        $(this).attr("checked","checked");//一定要重新刷一次数据
        $(this).next('span').addClass("selected")
        sum=sum+v;
    })
    $("#score").val(sum);
    $("#bbsContext").val(divContext);
    var userName2=$("#userName").val();
    var cardNo2=$("#cardNo").val();
    var talentMainID=$("#talentMainID").val();
    var chushengriqi=$("#chushengriqi").val();
    var questionTime=$("#question_Time").html();
    var score=sum;
    $("#userName2").val(userName2);
    $("#cardNo2").val(cardNo2);
    if(userName2!="" && cardNo2!=""){
        var divContext=$("#examContext").html();
        var url=  commCfig.commPagePath + '/joinus/talentMain/addTalentSelfAbility.html';
        var data={"id":talentMainID,"userName":userName2,"cardNo":cardNo2,"score":score,"talentMain.appointmentTime":chushengriqi ,"dataHtml":encodeURIComponent(divContext) , "questionTime":questionTime };
        $.ajax({
            type:"post",
            data:data,
            url:url,
            cache:false,
            dataType:"json",
            success:function(data){
                if(data.msg==0){
                    alert("测评题保存失败，请联系管理员");
                }else if(data.msg==1){
                    $("#subResult").css("display","none");
                    $("#subResult2").css("display","none");
                    clearTimeout(t);
                    $("#examContext").find("input[type=radio]").attr("disabled", "disabled");
                    $("#bscontext").attr("disabled","disabled");
                    $("#question_Time").html("用时："+qhour+"时"+qminute+"分"+qsecond+"秒");
                    $("#question_Time2").html("用时："+qhour+"时"+qminute+"分"+qsecond+"秒");
                }else{
                    alert("测评题保存失败，请联系管理员");
                }

                $("input[data=choiceTypeValue]").each(function(){
                    var vID=$(this).attr("dataID");
                    var vChoiceItem=$(this).attr("choiceItem");
                    $("#"+vChoiceItem+vID).attr("dataValue","0");
                }) ;
                $("input[data=choiceTypeAnalyse]").each(function(){
                    var vID=$(this).attr("dataID");
                    var vChoiceItem=$(this).attr("choiceItem");
                    $("#analyse"+vChoiceItem+vID).html("");
                }) ;
            }
        });
    }else{
        $("input[data=choiceTypeValue]").each(function(){
            var vID=$(this).attr("dataID");
            var vChoiceItem=$(this).attr("choiceItem");
            $("#"+vChoiceItem+vID).attr("dataValue","0");
        }) ;
        $("input[data=choiceTypeAnalyse]").each(function(){
            var vID=$(this).attr("dataID");
            var vChoiceItem=$(this).attr("choiceItem");
            $("#analyse"+vChoiceItem+vID).html("");
        }) ;
            alert("请先填写基础信息");
            return;
    }
 }







//======================其他问题==============================
//是否能全职实习
function fullInternCile(obj){
    if(obj!=''){
        if($(obj).val()=="1"){
             $("#InternCile").attr("style","display:none;"); 
        }else if($(obj).val()=="2"){
            $("#InternCile").attr("style","display: table-row;");//显示div
        }else{
             $("#InternCile").attr("style","display:none;"); 
        }
    }
}

//招聘信息的渠道来源
function showInWorker(){
    var value=$("#infoSource").val();
    if(value=="内部推荐"){
        $("#inWorkerInfo").show();
    }else{
        $("#inWorkerInfo").hide();
    }
}

//是否愿意交纳500元履约保证金
function showReason(obj){
    var val=obj.value;
    if(val=="2"){
        $("#noMoneyReasonForShow").show();
    }else{
        $("#noMoneyReasonForShow").hide();
    }
}

    
    //查看就业履约保证金交纳说明
    function layerClick(){
        //var intype=commCfig.commIntype;
        var url= 'deposit.html';
        layer.open({
            type: 2,
            title: '就业履约保证金交纳说明',
            shadeClose: false,
            shade: 0.5,
            area: ['1050px', '600px'],
            content: url
        });
    }

//添加一行同业竞争人员
function addPeople() {
    $("#talentCompetitorList").append(' <tr class="addTalentCompetitorList">\n' +
        '                                                    <td>\n' +
        '                                                        <select name="talentCompetitorList[0].relationType" class="ctform addForCompetitor selectact_relation" >\n' +
        '                                                            <option value="0" selected="selected">请选择</option>\n' +
        '                                                            <option value="1">家属</option>\n' +
        '                                                            <option value="2">亲属</option>\n' +
        '                                                            <option value="3">恋人</option>\n' +
        '                                                        </select>\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <select name="talentCompetitorList[0].relationName" class="ctform addForCompetitor relationName">\n' +
        '                                                            <option value="请选择" selected="selected">请选择</option>\n' +
        '                                                        </select>\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].competitor" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].position" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].induStry" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].organization" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].organizationcity" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <input type="text" name="talentCompetitorList[0].contact" class="ctform addForCompetitor" value="" onblur="checkLength1(this);"onkeyup="checkLength1(this);" />\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <select class="ctform addForCompetitor" name="talentCompetitorList[0].isCompete">\n' +
        '                                                            <option value="0">请选择</option>\n' +
        '                                                            <option value="1">是</option>\n' +
        '                                                            <option value="2">否</option>\n' +
        '                                                        </select>\n' +
        '                                                    </td>\n' +
        '                                                    <td>\n' +
        '                                                        <span onclick="deltr(this)">删除</span>\n' +
        '                                                    </td>\n' +
        '                                                </tr>');
}

//删除一行同业竞争人员
function deltr(obj) {
    $(obj).parent().parent().remove();
}


function selectFimalythings(){
    var fimalythings=$("#fimalythings").val();
    if(fimalythings== 1||fimalythings== 2){
        $("#fimalythingsLeave").show();
        $("#fimalythingsleave1").prop("readonly",false);
        $("#fimalythingsleave2").prop("readonly",false);
        $("#fimalythingsleave1").val("");
        $("#fimalythingsleave2").val("");
    }else if(fimalythings==3){
        $("#fimalythingsLeave").show();
        $("#fimalythingsleave1").val(0);
        $("#fimalythingsleave1").prop("readonly",true);
        $("#fimalythingsleave2").val(0);
        $("#fimalythingsleave2").prop("readonly",true);
        
    }else{
        $("#fimalythingsLeave").hide();
    }
    
}

function selectBusyfarming(){
    var isbusyfarming=$("#isbusyfarming").val();
    if(isbusyfarming== 1){
        $("#isbusyfarmingLeave").show();
        $("#busyfarmingleave1").prop("readonly",false);
        $("#busyfarmingleave2").prop("readonly",false);
        $("#busyfarmingleave1").val("");
        $("#busyfarmingleave2").val("");
    }else if(isbusyfarming==2){
        $("#isbusyfarmingLeave").show();
        $("#busyfarmingleave1").prop("readonly",true);
        $("#busyfarmingleave2").prop("readonly",true);
        $("#busyfarmingleave1").val(0);
        $("#busyfarmingleave2").val(0);
    }else{
        $("#isbusyfarmingLeave").hide();
    }
    
}

//是否能全职实习
function fullInternCile(obj){
    if(obj!=''){
        if($(obj).val()=="1"){
             $("#InternCile").attr("style","display:none;"); 
        }else if($(obj).val()=="2"){
            $("#InternCile").attr("style","display: table-row;");//显示div
        }else{
             $("#InternCile").attr("style","display:none;"); 
        }
    }
}


//上传图片识别方法
function checkfiles(obj){
        var v=$(obj).val();
        if(v!==''){
            var idx=v.lastIndexOf(".")
            if(idx>-1){
                var type=v.substr(idx+1).toLowerCase();
                if(type != 'jpg' && type != 'png' && type != 'jpeg' && type != 'gif'&&type != 'doc'&&type != 'docx'&&type != 'pdf'){
                    alert("只能上传.jpg  .png  .jpeg  .gif  .doc .docx类型的文件!");
                    $(obj).val('')
                    return;
                }
            }
        }


    } 
//========================提交==============================
//修改list[index] 中的 index
function updateListMethod(){
    var k = 0;
    $(".skillsTR").each(function(){
        if(!$(this).parent().parent().attr("class") != "demo"){
            $(this).find("input[name^='talentSkillsList2[0]']").each(function(i,obj){
                var nameStr = $(obj).attr("name");
                var strEnd = nameStr.substring(nameStr.indexOf("."));
                    nameStr = "talentSkillsList2[" + k + "]" + strEnd;
                $(obj).attr("name",nameStr);
            });
            k++;
        }
    });
    
    k = 0;
    $(".experiencesTable").each(function(){
        if($(this).parent().attr("class") != "demo"){
            $(this).find("input[name^='talentExperiencesList[0]'],textarea[name^='talentExperiencesList[0]'],select[name^='talentExperiencesList[0]']").each(function(i,obj){
                var nameStr = $(obj).attr("name");
                var strEnd = nameStr.substring(nameStr.indexOf("."));
                    nameStr = "talentExperiencesList[" + k + "]" + strEnd;
                $(obj).attr("name",nameStr);
            });
            k++;
        }
    });
    
    k = 0;
    $(".trainingTable2").each(function(){
        if($(this).parent().attr("class") != "demo"){
            $(this).find("input[name^='talentTrainingList2[0]'],select[name^='talentTrainingList2[0]']").each(function(i,obj){
                var nameStr = $(obj).attr("name");
                var strEnd = nameStr.substring(nameStr.indexOf("."));
                    nameStr = "talentTrainingList2[" + k + "]" + strEnd;
                $(obj).attr("name",nameStr);
            });
            k++;
        }
    });

    k = 0;
    $(".addTalentCompetitorList").each(function(){
            $(this).find("input[name^='talentCompetitorList[0]'],select[name^='talentCompetitorList[0]']").each(function(i,obj){
                var nameStr = $(obj).attr("name");
                var strEnd = nameStr.substring(nameStr.indexOf("."));
                    nameStr = "talentCompetitorList[" + k + "]" + strEnd;
                $(obj).attr("name",nameStr);
            });
            k++;
    });
}


//异步请求查询能力测评是否提交成功
function searchSelfEvaluation(){    
    var id=$('#talentMainID').val();
     $.ajax({
            type : "post",
            url : commCfig.commPagePath +"/joinus/talentMain/searchTalentSelfAbility.html",
            data : {"talentMain.id":id},
            dataType:"json",
            success : function(data) {
                var msg = data.msg;
                if(msg!=''){
                    tijiao();
                    
                }else if($("#ability_vote").css("display")=="none"){
                    tijiao();
                }
            }  
        }); 
}

function tijiao(){
    var ability_vote=$("#ability_vote").css("display");
    if(ability_vote!="none") {
        var type=$("#subResult2").css("display");
        if (type == "none") {
        } else {
            startSumbit();//提交能力测评答案
        }
    }
    if(confirm("确认是否提交？")){
        $(".formSubmit").unbind("click");
    	setTimeout(function(){fun1();},3000);//这一行会延迟3秒执行
    } 
    
}
function fun1(){
   var form=document.getElementById("pageForm");
	 form.action=commCfig.commPagePath +'/joinus/talentMain/apply_success.html';
	 form.submit();
}

//========================右侧展开收缩======================
function scrolltoid(emid){
    $('html,body').animate({scrollTop:$(emid).offset().top-20},200);
    explinetopnl(emid);
}

function explinetopnl(emid){
    var tgct=$(emid+" .rcctt");
    tgct.show();
    $(emid+" .rchead .pmore").attr("class","pmore");
    $(emid+" .rchead .pmore").attr("title","收起");
}

function retpnltoline(emid){
    var tgct=$(emid+" .rcctt");
    tgct.hide();
    $(emid+" .rchead .pmore").attr("class","pmore pmorecs");
    $(emid+" .rchead .pmore").attr("title","展开");
}