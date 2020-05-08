
//=================================验证==============================
//姓名 验证
function checkLength1(obj){
	maxlimt=15;
	if(obj.value.length>maxlimt){
		obj.value=obj.value.substring(0,maxlimt);
		alert("超过15个字");
	}
}
function checkLength2(obj){
	maxlimt=50;
	if(obj.value.length>maxlimt){
		obj.value=obj.value.substring(0,maxlimt);
		alert("超过50个字");
	}
}
function checkLength3(obj){
	maxlimt=1000;
	if(obj.value.length>maxlimt){
		obj.value=obj.value.substring(0,maxlimt);
		alert("超过1000个字");
	}
}

function checkNumber(obj){
	var reg = /^[0-9]*$/;
	var numb = $(obj).val();
	if(numb != ""){
		if(!reg.test(numb)){
			alert("请输入整数数字！若无，请输0。 ");
			$(obj).val('');
			$(obj).focus();
			return;
		}
	}
}

//验证数字
function checkNumber(obj){
    var reg = /^[0-9]*$/;
    var numb = $(obj).val();
    if(numb != ""){
        if(!reg.test(numb)){
            alert("请输入整数数字！若无，请输0。 ");
            $(obj).val('');
            $(obj).focus();
            return;
        }
    }
}

//==================================================

//checkBaseInfo:基本信息
function checkBaseInfo(){
	var userName = $("#userName").val();//姓名
	var sex = $("#sexSelect option:selected").val();//性别
	
	var birthDay = $("#birthDay").val();//生日
	var educatedName = $("#educatedName").val();//文化程度
	
	var nationIDName = $("#nationIDName").val();//民族
	var nativePlace = $("#nativePlace").val();//籍贯
	var cardNo = $("#cardNo").val();//身份证号码
	var cardAddress = $("#cardAddress").val();//身份证地址
	var mobile = $("#mobile").val();//手机号码
	
	var email = $("#email").val();//email
	var emergencyPerson = $("#emergencyPerson").val();//紧急联系人
	var emergencyTelnum = $("#emergencyTelnum").val();//紧急联系人号码
	var emergencyType = $("#emergencyType").val();//紧急联系人关系
	var marriageID = $("#marriageID").val();//婚姻状况
	var politicalID = $("#politicalID").val();//政治面貌
	
	var touxiang = $("#imglength").val();//照片
	var account=$("#isAccount").val(); //是否有户口
	var idPlace=$("#idPlace").val(); //户口所在地
	var idType=$("#idType").val(); //户口类型
/*	var hasExperice=$("input[name='talentMain.hasExperice']:checked").val();//内贸金牌商家有无行业经验
	var workYear=$("select[name='talentMain.workYear'] option:selected").val();//就业年限
	var hasFinalCust=$("input[name='talentMain.hasFinalCust']:checked").val();//有无终端客户
*/	var jobName=$("#jobName").val();
	var chushengriqi=$("#chushengriqi").val();//填写预约面试时间或面试时间啊
    
	if($.trim(userName) == ""){
		alert("请填写姓名！");
		$("#userName").focus();
		return false;
	}
	
	if(sex == "" || sex == 0){
		alert("请选择性别！");
		$("#sexSelect").focus();
		return false;
	}
	if($.trim(birthDay) == ""){
		alert("请选填出生日期！");
		$("#birthDay").focus();
		return false;
	}
	if($.trim(nationIDName) == ""){
		alert("请填写民族！");
		$("#nationIDName").focus();
		return false;
	}
	if($.trim(nativePlace) == ""){
		alert("请填写籍贯！");
		$("#nativePlace").focus();
		return false;
	}
	if($.trim(educatedName) == ""){
		alert("请选择文化程度！");
		$("#educatedName").focus();
		return false;
	}
	 //高考分数
	if($(".edu_bachelor").css("display")=="block"){
		if(!$("#edu_bachelor").val()){
			$("#edu_bachelor").focus();
			alert("请填写高考分数！");
			return false;
		}
		if(!$("#edu_province").val()){
			$("#edu_province").focus();
			alert("请填写高考所在省市！");
			return false;
		}
		if(!$("#edu_master").val()){
			$("#edu_master").focus();
			alert("请填写所在省市高考总分！");
			return false;
		}
	}
	//考研分数
	if($(".edu_master").css("display")=="block"){
		if(!$("#edu_masterse").val()){
			alert("请填写考研分数！");
			$("#edu_masterse").focus();
			return false;
		}
	}
	//考博分数
	if($(".edu_doctor").css("display")=="block"){
		if(!$("#edu_doctor").val()){
			alert("请填写考博分数！");
			$("#edu_doctor").focus();
			return false;
		}
	} 
	
	if($.trim(cardNo)==""){
		alert("请输入身份证号！ ")
		$("#cardNo").focus();
		return false;
	}
	
	
	if($.trim(cardAddress) == ""){
		alert("请填写身份证地址！");
		$("#cardAddress").focus();
		return false;
	}
	
	if($.trim(mobile) == ""){
		alert("请填写手机号码！");
		$("#mobile").focus();
		return false;
	}
	if($.trim(mobile).length != 11){
		alert("填写正确的11位手机号码！");
		$("#mobile").focus();
		return false;
	}
	if(!isPoneAvailable(mobile)){
		alert("填写正确的11位手机号码！");
		$("#mobile").focus();
		return false;
	}
	
	
	if($.trim(email) == ""){
		alert("请填写email！");
		$("#email").focus();
		return false;
	}
	if($.trim(account)=='0'){
		alert("请选择是否本地户口！");
		$("#isAccount").focus();
		return false;
	}
	
	if(account=='1'){
		if(idType==''||idType==0){
			alert("请选择户口类型");
			$("#idType").focus();
			return false;
		}
	}
	if(account==='2'){
		var isResidence=$("#isResidence").val();
		if(isResidence=='0'){
			alert("请选择是否有居住证！");
			$("#isResidence").focus();
			return false;
		}
		if(isResidence=='1'){
			var isResidenceScore=$("#isResidenceScore").val();
			if(isResidenceScore=='0'){
			alert("请选择居住证是否满分！");
			$("#isResidenceScore").focus();
			return false;
			}
		}
		if(idType==''||idType==0){
			alert("请选择户口类型");
			$("#idType").focus();
			return false;
		}
		if(idPlace==''){
			alert("请填写户口所在地");
			$("#idPlace").focus();
			return false;
		}
	}
	if($.trim(emergencyPerson) == ""){
		alert("请填写紧急联系人！");
		$("#emergencyPerson").focus();
		return false;
	}
	if($.trim(emergencyTelnum) == ""){
		alert("请填写紧急联系人号码！");
		$("#emergencyTelnum").focus();
		return false;
	}
	if(!isPoneAvailable(emergencyTelnum)){
		alert("请填写正确的11位数紧急联系人号码！");
		$("#emergencyTelnum").focus();
		return false;
	}
	
	if($.trim(emergencyType) == ""){
		alert("请填写紧急联系人关系！");
		$("#emergencyType").focus();
		return false;
	}
	if($.trim(marriageID) == "0"){
		alert("请选择婚姻状况！");
		$("#marriageID").focus();
		return false;
	}
	if($.trim(politicalID) == "0"){
		alert("请选择政治面貌！");
		$("#politicalID").focus();
		return false;
	}
	
	var securityID = $("#securityID").val();//社会保险1是2否
	var securityAddress = $("#securityAddress").val();//投保地
	var liveAddress = $("#liveAddress").val();//现住地址
	var contractAddress = $("#contractAddress").val();//具体详细地址
	var houseQualityID = $("#houseQualityID").val();//房屋属性
	var transportation = $("#transportation").val();//交通工具
	var wayTime = $("#wayTime").val();//路上耗时
	if(securityID == "" || securityID == 0||securityID=="undefined"){
		alert("请选择社会保险！");
		$("#securityID").focus();
		return false;
	}
	if(securityID == 1){
		if($.trim(securityAddress) == ""||$.trim(securityAddress) =="undefined"){
			alert("请填写投保地！");
			$("#securityAddress").focus();
			return false;
		}
	}
	if($.trim(liveAddress) == ""||$.trim(liveAddress) =="undefined"){
		alert("请填写邮寄地址！");
		$("#liveAddress").focus();
		return false;
	}
	if($.trim(contractAddress) == ""||$.trim(contractAddress)=="undefined"){
		alert("请填写详细邮寄地址至街道门牌号！");
		$("#contractAddress").focus();
		return false;
	}
	
	if($.trim(contractAddress) == "请具体至街道门牌号"){
		alert("请填写详细邮寄地址至街道门牌号！");
		$("#contractAddress").focus();
		return false;
	}
	
	if(houseQualityID == "" || houseQualityID == 0||houseQualityID=="undefined"){
		alert("请选择房屋属性！");
		$("#houseQualityID").focus();
		return false;
	}
	if(transportation == "" || transportation == 0||transportation=="undefined"){
		alert("请选择交通工具！");
		$("#transportation").focus();
		return false;
	}
	if(wayTime == "" || wayTime == 0||wayTime=="undefined"){
		alert("请选择路上耗时！");
		$("#wayTime").focus();
		return false;
	}
/*	if(jobName=="合伙式金牌商家(内贸交易员)"){
		if(hasExperice==''||hasExperice==undefined){
			alert('请选择有无行业经验');
			$("select[name='talentMain.workYear']").focus();
			return false;
		}
		if(hasExperice==0){
			if(workYear==''||workYear==undefined||workYear==='0'){
				alert('请选择年限');
				$("select[name='talentMain.workYear']").focus();
				return false;
			}
			if(hasFinalCust==''||hasFinalCust==undefined){
				alert('请选择有无终端客户');
				$("select[name='talentMain.workYear']").focus();
				return false;
			}
		}
	}*/
	if($.trim(touxiang)=='0'||$.trim(touxiang)=="undefined"){
		alert("请上传照片！");
		$(".job_but").focus();
		return false;
	}
	if($.trim(chushengriqi)==""||$.trim(chushengriqi)=="undefined"){
        if(commCfig.commIntype=='school'){
           alert("请填写面试时间");
           return false;
        }else{
            alert("请填写预约面试时间");
            return false;
        }
    }else{
 		if(chushengriqi.substring(11,13)=="00"){
 			if(commCfig.commIntype=='school'){
 	            alert("请填写面试时间不能为00时");
 	            return false;
 	        }else{
 	            alert("请填写预约面试时间不能为00时");
 	            return false;
 	        }
			return false;
		}else{
         $("#chushengriqi2").val(chushengriqi);
		}
    }
	
	return true;
}


//家庭状况
function checkFamily(){
	var marriageID = $("#marriageID").val();
	var reg = /^[0-9]*$/;
	
	var father_type = $("#parentTypeNamef").val();
	var father_name = $(".family1").find("input[name$='parentName']");
	var father_age = $(".family1").find("input[name$='parentage']");
	var father_workCorp = $(".family1").find("input[name$='workCorp']");
	var father_parentTelnum = $(".family1").find("input[name$='parentTelnum']");
	var father_jobTypeName = $(".family1").find("input[name$='jobTypeName']");
	var father_liveAddress = $(".family1").find("input[name$='liveAddress']");
	var father_incoming = $("#incomingf").val();
	
	
	var mother_type = $("#parentTypeNamem").val();
	var mother_name = $(".family2").find("input[name$='parentName']");
	var mother_age = $(".family2").find("input[name$='parentage']");
	var mother_workCorp = $(".family2").find("input[name$='workCorp']");
	var mother_parentTelnum = $(".family2").find("input[name$='parentTelnum']");
	var mother_jobTypeName = $(".family2").find("input[name$='jobTypeName']");
	var mother_liveAddress = $(".family2").find("input[name$='liveAddress']");
	var mother_incoming = $("#incomingm").val();
	
	var love_type = $("#parentTypeNamel").val();
	var love_name = $(".family3").find("input[name$='parentName']");
	var love_age = $(".family3").find("input[name$='parentage']");
	var love_workCorp = $(".family3").find("input[name$='workCorp']");
	var love_parentTelnum = $(".family3").find("input[name$='parentTelnum']");
	var love_jobTypeName = $(".family3").find("input[name$='jobTypeName']");
	var love_liveAddress = $(".family3").find("input[name$='liveAddress']");
	var love_incoming = $("#incomingl").val();
	//alert($(father_type).val());
	if($.trim(father_type)=="请选择"){
		alert("家庭状况-称谓必填！");
		$("#parentTypeNamef").focus();
		return false;
	}
	
	if($.trim(father_name.val()) == ""){
		alert("家庭状况-"+father_type+"姓名必填！");
		$(".ctforms").focus();
		return false;
	}
	if($.trim(father_age.val()) != ""){
		if(!reg.test($.trim(father_age.val()))){
			alert("家庭状况-"+father_type+"年龄不是数字，请填写数字！");
			father_age.focus();
			return false;
		}
	}else{
		father_age.val(null);
	}
	
	//if($.trim(father_name.val()) != "无"){
		if($.trim(father_age.val()) == ""){
			alert("家庭状况-"+father_type+"年龄必填！");
			$(".ctforme").focus();
			return false;
		}
		if($.trim(father_workCorp.val()) == ""){
			alert("家庭状况-"+father_type+"工作或学习单位必填！");
			$(".ctformg").focus();
			return false;
		}
		if($.trim(father_parentTelnum.val()) == ""){
			alert("家庭状况-"+father_type+"联系电话必填！");
			$(".ctformf").focus();
			return false;
		}
		if($.trim(father_jobTypeName.val()) == ""){
			alert("家庭状况-"+father_type+"职务必填！");
			$(".ctformh").focus();
			return false;
		}
		if($.trim(father_liveAddress.val()) == ""){
			alert("家庭状况-"+father_type+"现住地址必填！");
			$(".ctformt").focus();
			return false;
		}
		if($.trim(father_incoming) == "请选择"){
			alert("家庭状况-"+father_type+"年收入必填！");
			$("#incomingf").focus();
			return false;
		}
	//}
	
	if($.trim(mother_type)=="请选择"){
		
		if($.trim(mother_name.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
	
		if($.trim(mother_age.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(mother_workCorp.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(mother_parentTelnum.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(mother_jobTypeName.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(mother_liveAddress.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(mother_incoming) != "请选择"){
			alert("家庭状况-称谓必填！");
			return false;
		}
	}else{
		
	
	
		if($.trim(mother_name.val()) == ""){
			alert("家庭状况-"+mother_type+"姓名必填！");
			return false;
		}
		if($.trim(mother_age.val()) != ""){
			if(!reg.test($.trim(mother_age.val()))){
				alert("家庭状况-"+mother_type+"年龄不是数字，请填写数字！");
				mother_age.focus();
				return false;
			}
		}else{
			mother_age.val(null);
		}
	
		if($.trim(mother_age.val()) == ""){
			alert("家庭状况-"+mother_type+"年龄必填！");
			return false;
		}
		if($.trim(mother_workCorp.val()) == ""){
			alert("家庭状况-"+mother_type+"工作或学习单位必填！");
			return false;
		}
		if($.trim(mother_parentTelnum.val()) == ""){
			alert("家庭状况-"+mother_type+"联系电话必填！");
			return false;
		}
		if($.trim(mother_jobTypeName.val()) == ""){
			alert("家庭状况-"+mother_type+"职务必填！");
			return false;
		}
		if($.trim(mother_liveAddress.val()) == ""){
			alert("家庭状况-"+mother_type+"现住地址必填！");
			return false;
		}
		if($.trim(mother_incoming) == "请选择"){
			alert("家庭状况-"+mother_type+"年收入必填！");
			return false;
		}
	}
	
	
	if($.trim(love_type)=="请选择"){
		if($.trim(love_name.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		
		if($.trim(love_age.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(love_workCorp.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(love_parentTelnum.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(love_jobTypeName.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(love_liveAddress.val()) != ""){
			alert("家庭状况-称谓必填！");
			return false;
		}
		if($.trim(love_incoming) != "请选择"){
			alert("家庭状况-称谓必填！");
			return false;
		}
	}else{
	//if(marriageID == "2" || marriageID == "3"){
		//已婚离异才有配偶信息
		if($.trim(love_name.val()) == ""){
			alert("家庭状况-"+love_type+"姓名必填！");
			return false;
		}
		if($.trim(love_age.val()) != ""){
			if(!reg.test($.trim(love_age.val()))){
				alert("家庭状况-"+love_type+"年龄不是数字，请填写数字！");
				love_age.focus();
				return false;
			}
		}else{
			love_age.val(null);
		}
			if($.trim(love_age.val()) == ""){
				alert("家庭状况-"+love_type+"年龄必填！");
				return false;
			}
			if($.trim(love_workCorp.val()) == ""){
				alert("家庭状况-"+love_type+"工作或学习单位必填！");
				return false;
			}
			if($.trim(love_parentTelnum.val()) == ""){
				alert("家庭状况-"+love_type+"联系电话必填！");
				return false;
			}
			if($.trim(love_jobTypeName.val()) == ""){
				alert("家庭状况-"+love_type+"职务必填！");
				return false;
			}
			if($.trim(love_liveAddress.val()) == ""){
				alert("家庭状况-"+love_type+"现住地址必填！");
				return false;
			}
			if($.trim(love_incoming) == "请选择"){
				alert("家庭状况-"+love_type+"年收入必填！");
				return false;
			}
		}	
	
	return true;
	}


//教育经历
/**
 * 添加高中以下的检查
 */
function checkEducation(){
	var educatedName = $("#educatedName").val();//文化程度
	if($.trim(educatedName)=="高中以下"){
		if((!checkEducation5()) && (!checkEducation6())){
			alert("请完成教育经历部分！(小学或初中至少填写完整一项) ");
			return false;
		}
	}else{
		if($.trim(educatedName) == "高中"){
			if(!checkEducation0()){
				return false;
			}
		}else if($.trim(educatedName) == "大专"){
			if(!checkEducation0()){
				return false;
			}
			if(!checkEducation1()){
				return false;
			}	
		}else if($.trim(educatedName) == "本科"){
			if(!checkEducation0()){
				return false;
			}
			if(!checkEducation2()){
				return false;
			}
		}else if($.trim(educatedName) == "成大"){
			if(!checkEducation0()){
				return false;
			}
			if(!checkEducation2()){
				return false;
		}
		}else if($.trim(educatedName) == "硕士"){
			if(!checkEducation0()){
				return false;
			}
			if(!checkEducation2()){
				return false;
			}
			if(!checkEducation3()){
				return false;
			}
		}else if($.trim(educatedName) == "博士"){
			if(!checkEducation0()){
				return false;
			}
			if(!checkEducation2()){
				return false;
			}
			if(!checkEducation3()){
				return false;
			}
			if(!checkEducation4()){
				return false;
			}
		}
	}
	return true;
}

//高中
function checkEducation0(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[0].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[0].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[0].school']").val();//学校
	var major = $("#pageForm").find("input[name$='talentEducationList[0].major']").val();//专业
	var educateTypeName = $("#educateTypeName0").val();//学习形式
	
	if($.trim(startDate) == ""){
		alert("请选择：教育经历-高中-起始日期！");
		$("#pageForm").find("input[name$='talentEducationList[0].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		alert("请选择：教育经历-高中-结束日期！");
		$("#pageForm").find("input[name$='talentEducationList[0].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		alert("请填写：教育经历-高中-学校！");
		$("#pageForm").find("input[name$='talentEducationList[0].school']").focus();
		return false;
	}
	if($.trim(educateTypeName) == ""){
		alert("请选择：教育经历-高中-学习形式！");
		$("#educateTypeName0").focus();
		return false;
	}
	return true;
}

//大专
function checkEducation1(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[1].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[1].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[1].school']").val();//学校
	var major = $("#pageForm").find("input[name$='talentEducationList[1].major']").val();//专业
	var educateTypeName = $("#educateTypeName1").val();//学习形式
	
	if($.trim(startDate) == ""){
		alert("请选择：教育经历-大专-起始日期！");
		$("#pageForm").find("input[name$='talentEducationList[1].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		alert("请选择：教育经历-大专-结束日期！");
		$("#pageForm").find("input[name$='talentEducationList[1].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		alert("请填写：教育经历-大专-学校！");
		$("#pageForm").find("input[name$='talentEducationList[1].school']").focus();
		return false;
	}
	if($.trim(major) == ""){
		alert("请填写：教育经历-大专-专业！");
		$("#pageForm").find("input[name$='talentEducationList[1].major']").focus();
		return false;
	}
	if($.trim(educateTypeName) == ""){
		alert("请选择：教育经历-大专-学习形式！");
		$("#educateTypeName1").focus();
		return false;
	}
	return true;
}

//本科
function checkEducation2(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[2].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[2].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[2].school']").val();//学校
	var major = $("#pageForm").find("input[name$='talentEducationList[2].major']").val();//专业
	var educateTypeName = $("#educateTypeName2").val();//学习形式
	
	if($.trim(startDate) == ""){
		alert("请选择：教育经历-本科-起始日期！");
		$("#pageForm").find("input[name$='talentEducationList[2].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		alert("请选择：教育经历-本科-结束日期！");
		$("#pageForm").find("input[name$='talentEducationList[2].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		alert("请填写：教育经历-本科-学校！");
		 $("#pageForm").find("input[name$='talentEducationList[2].school']").focus();
		return false;
	}
	if($.trim(major) == ""){
		alert("请填写：教育经历-本科-专业！");
		$("#pageForm").find("input[name$='talentEducationList[2].major']").focus();
		return false;
	}
	if($.trim(educateTypeName) == ""){
		alert("请选择：教育经历-本科-学习形式！");
		$("#educateTypeName2").focus();
		return false;
	}
	return true;
}
//硕士
function checkEducation3(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[3].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[3].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[3].school']").val();//学校
	var major = $("#pageForm").find("input[name$='talentEducationList[3].major']").val();//专业
	var educateTypeName = $("#educateTypeName3").val();//学习形式
	
	if($.trim(startDate) == ""){
		alert("请选择：教育经历-硕士-起始日期！");
		$("#pageForm").find("input[name$='talentEducationList[3].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		alert("请选择：教育经历-硕士-结束日期！");
		$("#pageForm").find("input[name$='talentEducationList[3].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		alert("请填写：教育经历-硕士-学校！");
		$("#pageForm").find("input[name$='talentEducationList[3].school']").focus();
		return false;
	}
	if($.trim(major) == ""){
		alert("请填写：教育经历-硕士-专业！");
		$("#pageForm").find("input[name$='talentEducationList[3].major']").focus();
		return false;
	}
	if($.trim(educateTypeName) == ""){
		alert("请选择：教育经历-硕士-学习形式！");
		$("#educateTypeName3").focus();
		return false;
	}
	return true;
}
//博士
function checkEducation4(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[4].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[4].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[4].school']").val();//学校
	var major = $("#pageForm").find("input[name$='talentEducationList[4].major']").val();//专业
	var educateTypeName = $("#educateTypeName4").val();//学习形式
	
	if($.trim(startDate) == ""){
		alert("请选择：教育经历-博士-起始日期！");
		$("#pageForm").find("input[name$='talentEducationList[4].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		alert("请选择：教育经历-博士-结束日期！");
		$("#pageForm").find("input[name$='talentEducationList[4].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		alert("请填写：教育经历-博士-学校！");
		$("#pageForm").find("input[name$='talentEducationList[4].school']").focus();
		return false;
	}
	if($.trim(major) == ""){
		alert("请填写：教育经历-博士-专业！");
		$("#pageForm").find("input[name$='talentEducationList[4].major']").focus();
		return false;
	}
	if($.trim(educateTypeName) == ""){
		alert("请选择：教育经历-博士-学习形式！");
		$("#educateTypeName4").focus();
		return false;
	}
	return true;
}
//小学
function checkEducation5(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[5].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[5].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[5].school']").val();//学校
	
	if($.trim(startDate) == ""){
		$("#pageForm").find("input[name$='talentEducationList[5].startDate']").focus();
		return false;
	}
	if($.trim(endDate) == ""){
		$("#pageForm").find("input[name$='talentEducationList[5].endDate']").focus();
		return false;
	}
	if($.trim(school) == ""){
		$("#pageForm").find("input[name$='talentEducationList[5].school']").focus();
		return false;
	}
	return true;
}
// 初中
function checkEducation6(){
	var startDate = $("#pageForm").find("input[name$='talentEducationList[6].startDate']").val();//起始日期
	var endDate = $("#pageForm").find("input[name$='talentEducationList[6].endDate']").val();//结束日期
	var school = $("#pageForm").find("input[name$='talentEducationList[6].school']").val();//学校
	
	if($.trim(startDate) == ""){
		return false;
	}
	if($.trim(endDate) == ""){
		return false;
	}
	if($.trim(school) == ""){
		return false;
	}
	return true;
}


//工作履历
function checkExperiences(){
	flaghande = 0;
	$(".experiencesDiv").find(".experiencesTable").each(function(i){
		var startDate = $(this).find("input[name$='startDate']").val();
		var endDate = $(this).find("input[name$='endDate']").val();
		var corpName = $(this).find("input[name$='corpName']").val();
		var jobName = $(this).find("input[name$='jobName']").val();
		var corpProduct = $(this).find("input[name$='corpProduct']").val();
		var corpempCount = $(this).find("input[name$='corpempCount']").val();
		var teamempCount = $(this).find("input[name$='teamempCount']").val();
		var corpAddress = $(this).find("input[name$='corpAddress']").val();
		var jobRemark = $(this).find("input[name$='jobRemark']").val();
		var proveUser=  $(this).find("input[name$='proveUser']").val();
		var proveUserTel=  $(this).find("input[name$='proveUserTel']").val();
		var monthincoming = $(this).find("input[name$='monthincoming']").val();
		var iscertify = $(this).find(".iscertifySelect").val();
		var issaxcertify = $(this).find(".issaxcertifySelect").val();
		var isBackdrop = $(this).find(".isBackdropSelect").val();
		var isSatisfy=$(this).find(".isSatisfySelect").val();
		var isReback=$(this).find(".isRebackSelect").val();
		// 将文本框内容保存在隐藏的div中 
		var contextQuitRemark=$("#contextQuitRemark_"+i).val();
		$("#txtQuitRemark_"+i).html(contextQuitRemark);		
		var reason=$("#quitRemark_"+i).html();
		// 将申请原因勾选框以div的形式存储
		$(this).find(".quitRemarktxt").val(reason);
		var quitRemark=checkQuitRemark(i);
 		if(startDate==""||startDate==undefined){
			alert("请填写工作单位的起始年月!");
			$(this).find("input[name$='startDate']").focus();
			flaghande++;
			return false;
		}
		if(endDate==""||endDate==undefined){
			alert("请填写工作单位的结束年月!");
			$(this).find("input[name$='endDate']").focus();
			flaghande++;
			return false;
		}
		if(!corpName){
			alert("请填写工作单位名称!");
			$(this).find("input[name$='corpName']").focus();
			flaghande++;
			return false;
		}
		if(!jobName){
			alert("请填写任职岗位!");
			$(this).find("input[name$='jobName']").focus();
			flaghande++;
			return false;
		}
		if(!corpProduct){
			 alert("请填写公司主营!");
			 $(this).find("input[name$='corpProduct']").focus();
			 flaghande++;
			return false;
		}
		if(!corpempCount){
			 $(this).find("input[name$='corpempCount']").focus();
			 $(this).find("#cmplistclist").show();
			// alert("请选择单位人数!");
			 flaghande++;
			return false;
		}
		
		if(!teamempCount){
			alert("请填写下属人数!");
			$(this).find("input[name$='teamempCount']").focus();
			flaghande++;
			return false;
		}
		if(!corpAddress){
			alert("请填写单位地点!");
			$(this).find("input[name$='corpAddress']").focus();
			flaghande++;
			return false;
		}
		if(!jobRemark){
			 alert("请填写工作职责!");
			 $(this).find("input[name$='jobRemark']").focus();
			 flaghande++;
			return false;
		}
		if(!proveUser){
			 alert("请填写证明人!");
			 $(this).find("input[name$='proveUser']").focus();
			 flaghande++;
			return false;
		}
		if(!proveUserTel){
			 alert("请填写证明人电话!");
			 $(this).find("input[name$='proveUserTel']").focus();
			 flaghande++;
			return false;
		}
		if(isBackdrop==0){
			alert("请选择是否接受背景调查!");
			$(this).find(".isBackdropSelect").focus();
			flaghande++;
			return false;
		}
		if(!monthincoming){
			 alert("请填写税前月总收入!");
			 $(this).find("input[name$='monthincoming']").focus();
			 flaghande++;
			return false;
		}
		if(isSatisfy==0){
			alert("请选择是否对薪资满意!");
			$(this).find(".isSatisfySelect").focus();
			flaghande++;
			return false;
		}
		if(isReback==0){
			alert("如果原单位请您回去继续上班，您的选择！");
			$(this).find(".isRebackSelect").focus();
			flaghande++;
			return false;
		}
		if(issaxcertify==0){
			alert("请选择是否愿意提供近6个月的银行流水单做薪资证明!");
			$(this).find(".issaxcertifySelect").focus();
			flaghande++;
			return false;
		}
		if(iscertify==0){
			alert("请选择是否有薪资证明!");
			$(this).find(".iscertifySelect").focus();
			flaghande++;
			return false;
		}
		
		var l=$(this).find("div[id^='quitRemark_']").find("input[name^='reason']:checked").length
		if(l==0){
			alert("请勾选离职原因!");
			$(window).scrollTop($(this).find("div[id^='quitRemark_']").offset().top);
			flaghande++;
			return false;
		}else{
			if($(this).find("div[id^='quitRemark_']").find("input[name^='reason11_']").attr("checked")){
				if(!$(this).find("div[id^='quitRemark_']").find("input[id^='contextQuitRemark_']").val()){
					$(this).find("div[id^='quitRemark_']").find("input[id^='contextQuitRemark_']").focus();
					flaghande++;
					return false;
				}
				
			}
			
		} 
		
	});
}

function checkQuitRemark(i){
	var b=0;
	var str="";
	var k=0;
	$("#quitRemark_"+i).find("input[type=checkbox]").each(function(){
		var isced=$(this).attr("checked");
		var nameStr=this.name;
		var strStart= nameStr.substring(0,nameStr.indexOf("_"));
		var index = nameStr.substring(nameStr.indexOf("_"));
		if(isced=="checked"){
			if(strStart=="reason11"){
				k=1;
				str=$("#contextQuitRemark_"+i).val();
			}else{
				b++;
			}
		}
	});
	if(b>0 && k==0){
		return true;
	}
    if(k==1 && $.trim(str)!="" && $.trim(str) !="请输入其他原因"){
		return true;
	}
    return false;
}

function qtwt(){
	var isoffice = $("#isoffice").val();//目前任职状况
	var Internship=$("#Internship").val();//当前选择是否能全职实习
	var quickinDate = $("#quickinDate").val();//最快报到时间
	var liveType = $("#liveType").val();//住宿意见
	var istravel = $("#istravel").val();//是否接受出差
	var isOutwork = $("#isOutwork").val();//是否接受异地调遣
	var mustwages = $("#mustwages").val()//要求薪资
	var isaccept = $("#isaccept").val();//是否接受早会时间
	var isshare = $("#isshare").val();//是否接受早会分享
	var isHighManager = $("#isHighManager").val();//目前是否担任过或曾经是否担任过股东、法人、董事、监事、高级管理人员职位
	//var isDrink=$("#isDrink").val;//是否酗酒
	var isGetMoney=$("#isGetMoney").val();
	$("#isMargin").val(isGetMoney);
	
	var noMoneyReason=$("#noMoneyReason_Txt").val();
	$("#noMoneyReason_RemarkTxt").html(noMoneyReason);	
	var allNoMoneyReason=$("#noMoneyReason_Remark").html();
	// 将不愿意缴纳原因勾选框以div的形式存储
	 $("#noMoneyReason").val(allNoMoneyReason);
	if(commCfig.commIntype=='school'){
		if($.trim(Internship)=="0"){
			alert("请选择：其他问题-是否能全职实习！");
			$("#Internship").focus();
			return false;
		}else if($.trim(Internship)=="2"){
			var fullReason=$("#fullReason").val();//选择否的时候检查填写原因没有
			if(fullReason==''||fullReason=='undefined'){
				alert("请填写：其他问题-不能全职实习原因！");
				return false;
			}
		}
	}else{
		if($.trim(isoffice) == "0"){
			alert("请选择：其他问题-目前任职状况！");
			$("#isoffice").focus();
			return false;
		}
	}
	
	if($.trim(quickinDate) == ""){
		alert("请选择：其他问题-最快报到时间！");
		$("#quickinDate").focus();
		return false;
	}
	if($.trim(liveType) == "0"){
		alert("请选择：其他问题-住宿意见！");
		$("#liveType").focus();
		return false;
	}
	if($.trim(istravel) == "0"){
		alert("请选择：其他问题-是否接受出差！");
		$("#istravel").focus();
		return false;
	}
	if($.trim(isOutwork) == "0"){
		alert("请选择：其他问题-是否接受异地调遣！");
		$("#isOutwork").focus();
		return false;
	}
	if($.trim(mustwages) == ""){
		alert("请填写：其他问题-要求薪资！");
		$("#mustwages").focus();
		return false;
	}
	if($.trim(isaccept) == "0"){
		alert("请填写：其他问题-是否接受早会是时间！");
		 $("#isaccept").focus();
		return false;
	}
	if($.trim(isshare) == "0"){
		alert("请填写：其他问题-是否接受早会分享！");
		$("#isshare").focus();
		return false;
	}
	if($.trim(isHighManager) == "0"){
		alert("请填写：其他问题-目前是否担任过或曾经是否担任过股东、法人、董事、监事、高级管理人员职位！");
		$("#isHighManager").focus();
		return false;
	}
	var infoSource=$("#infoSource").val();
	var inWorkerName=$("#inWorkerName").val();
	var inWorkerTel=$("#inWorkerTel").val();
	var otherSource=$("#otherSource").val();
	if(infoSource=="请选择"){
		alert("请您选择招聘信息渠道来源!");
		$("#infoSource").focus();
		return false;
	}else{
		if(infoSource=="内部推荐"){
			if(inWorkerName==''){
				alert("请您输入内部推荐人姓名!");
				$("#inWorkerName").focus();
				return false;
			}
			if(inWorkerTel==''){
				alert("请您输入内部推荐人联系方式!");
				$("#inWorkerTel").focus();
				return false;				
			}
		}
		if(infoSource=="其他" && $.trim(otherSource)==""){
			alert("请您输入招聘信息渠道来源!");
			$("#otherSource").focus();
			return false;
		}
	}
	if($("#isDrink").length){
		if($.trim($("#isDrink").val())==="0"){
			alert("请填写：其他问题-是否酗酒！");
			$("#isDrink").focus();
			return false;
		}
	}
	if(isGetMoney == "0"){
		alert("请选择是否愿意交纳500元履约保证金");
		$("#isGetMoney").focus();
		return false;
	}
	/*if(isGetMoney == "2"){

		var l=$('td').find("div[id='noMoneyReason_Remark']").find("input[name^='noReason']:checked").length
		if(l==0){
			alert("请勾选不愿意交纳原因!");
			$(window).scrollTop($('td').find("div[id='noMoneyReason_Remark']").offset().top);
			return false;
		}else{
			if($('td').find("div[id='noMoneyReason_Remark']").find("input[name='noReason5']").attr("checked")){
				if(!$('div').find("div[id='textNoReason']").find("input[id='noMoneyReason_Txt']").val()){
					alert('请填写其他原因!');
					$('div').find("div[id^='textNoReason']").find("input[id='noMoneyReason_Txt']").focus();
					return false;
				}
				
			}
			
		}

	}*/
	return true;
}

//学习或培训
function checkTrainingTable2(){
	resulthande = 0;
	$(".trainingTable2Div").find(".trainingTable2").each(function(){
		var startDate = $(this).find("input[name$='startDate']").val();
		var endDate = $(this).find("input[name$='endDate']").val();
		var mqpx_xxpxsj = $(this).find(".studyDateType").val();
		var educateschool = $(this).find("input[name$='educateschool']").val();
		var educateRemark = $(this).find("input[name$='educateRemark']").val();
		/* if(startDate != "" || educateschool != "" || educateRemark != "" || mqpx_xxpxsj != ""){ */
			/* if(startDate == "" || $.trim(educateschool) == "" || $.trim(educateRemark) == "" || $.trim(mqpx_xxpxsj) == ""){
				t = t + 1;
			} */
		/* } */
		if(startDate==""||startDate==undefined){
			alert("请填写培训起始年月!");
			$(this).find("input[name$='startDate']").focus();
			resulthande++;
			return false;
		}
		if(endDate==""||endDate==undefined){
			alert("请填写培训的结束年月!");
			$(this).find("input[name$='endDate']").focus();
			resulthande++;
			return false;
		}
		if(!mqpx_xxpxsj){
			alert("请选择学习培训时间!");
			$(this).find(".studyDateType").focus();
			resulthande++;
			return false;
		}
		if(!educateschool){
			alert("请填写学习培训机构名称!");
			$(this).find("input[name$='educateschool']").focus();
			resulthande++;
			return false;
		}
		if(!educateRemark){
			alert("请填写学习培训内容!");
			$(this).find("input[name$='educateRemark']").focus();
			resulthande++;
			return false;
		}
		
	});

}
/**
 * 在公司是否有家属关系人员或有无犯罪记录或有无传染病史或重大疾病史校验
 */
function isfamilyChecker(){

	  // 招聘信息渠道来源
    var isbusyfarming=$("#isbusyfarming").val();
    var fimalythings=$("#fimalythings").val();      
    var fimalythingsleave1=$("#fimalythingsleave1").val();      
    var fimalythingsleave2=$("#fimalythingsleave2").val();
    var busyfarmingleave1 =$("#busyfarmingleave1").val();
    var busyfarmingleave2 =$("#busyfarmingleave2").val();
    //增加试用期字段
    var infoSourcehande=$("#infoSourcehande").val();
    //增加试用期
    if(infoSourcehande=="0"){
        alert("请选择你希望的试用期!");
        $("#infoSourcehande").focus();
        return false;
    }
    if(isbusyfarming == "0"){
        alert("请选择是否有无农忙季");
        return false;
    }
	if (fimalythings == "0") {
		alert("请选择家庭事务状态");
		return false;
	}
	if ($("#fimalythings").length > 0) {
		if (fimalythingsleave1 == "" || fimalythingsleave1 == null) {
			alert("请输入家庭事务状态中的请假频率");
			return false;
		}

		if (fimalythingsleave2 == "" || fimalythingsleave2 == null) {
			alert("请输入试用期中家庭事务状态中的请假频率");
			return false;
		}
	}
	if ($("#isbusyfarming").length > 0) {
		if (busyfarmingleave1 == "" || busyfarmingleave1 == null) {
			alert("请输入农忙季的的请假频率");
			return false;
		}
		if (busyfarmingleave2 == "" || busyfarmingleave2 == null) {
			alert("请输入试用期中农忙季的的请假频率");
			return false;
		}
	}

	var isNowtraining = $("#isNowtraining").val();
	if (isNowtraining == "0") {
		alert("请勾选是否在学习或培训");
		$("#isNowtraining").focus();
		return false;
	}

	if (isNowtraining == "1") {
		checkTrainingTable2();//目前是否在参加学习或培训
		if (resulthande) {
			return false;
		}
	}
	// 是否有亲戚在本公司任职
	var isRelativeIn = $("#isRelativeIn").val();
	if (isRelativeIn == "0") {
		alert("请选择是否有亲属在本公司任职!")
		$("#isRelativeIn").focus();
		return false;
	} else if (isRelativeIn == "1") {
        var competitorCount=0;
        $(".addForCompetitor").each(function(){
            competitorCount++;
        })
        if(competitorCount==0){
            alert("请添加有无同业竞争人员情况(包括有无家属或亲属或恋人在公司任职情况)!");
            $("#talentCompetitorList").focus();
            return false;
        }
        var competitorFlagI=false;
        $(".addForCompetitor").filter("input").each(function(){
            var competitorInput=$(this).val();
            if(competitorInput==''||competitorInput==undefined){
                competitorFlagI=true;
            }
        })
        var competitorFlagS=false;
        $(".addForCompetitor").filter("select").each(function(){
            var competitorSelect= $(this).attr('value');
            if( competitorSelect=='' || competitorSelect==undefined|| competitorSelect=='请选择'|| competitorSelect=='0'){
                competitorFlagS=true;
            }
        })
        if(competitorFlagI||competitorFlagS){
            alert("有无同业竞争人员情况(包括有无家属或亲属或恋人在公司任职情况)信息需要填写完整!");
            $("#talentCompetitorList").focus();
            return false;
        }
	}
		var hasCriminalRecord = $("#hasCriminalRecord").val();
		var hasCriminalRecordDeatail = $("#hasCriminalRecordDeatail").val();
		if (hasCriminalRecord == '0') {
			alert("请选择有无犯罪记录!")
			$("#hasCriminalRecord").focus();
			return false;
		}
		if (hasCriminalRecord == '1') {
			if (hasCriminalRecordDeatail == ''
					|| hasCriminalRecordDeatail == 'undefied') {
				alert("请您输入犯罪记录说明!")
				$("#hasCriminalRecordDeatail").focus();
				return false;
			}
	
		}

		var hasDisease = $("#hasDisease").val();
		var hasDiseaseDeatail = $("#hasDiseaseDeatail").val();
		if (hasDisease == '0') {
			alert("请选择有无传染病史或重大疾病史!")
			$("#hasDisease ").focus();
			return false;
		}
		if (hasDisease == '1') {
			if (hasDiseaseDeatail == '' || hasDiseaseDeatail == 'undefied') {
				alert("请您输入传染病史或重大疾病史说明!")
				$("#hasDiseaseDeatail").focus();
				return false;
			}
		}
		return true;
} 





/**
 * Layer不同的异常提示信息
 * @param icon
 * @param str
 * @returns
 */
function messagelayer(icon,str){
	if(icon==1){
		return layer.msg(str,{icon:1,time:2000});
	}else if(icon==2){
	 return layer.msg(str,{icon:2,time:2000});
	}else if(icon==3){
		return layer.msg(str,{icon:3,time:2000});
	}else{
		return layer.msg(str,{time:3000});
	}
}
/**
 * 验证下手机号码
 * @param iphone
 * @returns {Boolean}
 */
function isPoneAvailable(iphone) {
    var myreg=/^1\d{10}$/;
    if (!myreg.test(iphone)) {
        return false;
    } else {
        return true;
    }
}