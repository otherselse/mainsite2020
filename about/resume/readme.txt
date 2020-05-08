原有的样式都去掉，采用新的newResume.css , js基本不做改动 ，footer不需要 。checkfiles  ，点击 添加 ， 报错 main_id 报错。


1、rctitle 中  ：  rct_lp pl20  ，rct_rp pr20

2、rcw.js 中  $(".area_select").live("click",function(){  中  <div id='areaselectform' class='cdpform' style='width:260px;'>中改为宽度330px
注意更改js版本号

3、id="chushengriqi"  增加  placeholder="预约面试时间" 

4、id="bscontext" ，width改成95%

5、 报错 main_id 报错。
      lgsteel.js 中    $(".addline1").live("click",function(){  之前 加 var  main_id=0;

6、上传头像：取消按钮 background-color:#ccc; 去掉

7、目前是否在参加学习或培训  ， 展开合并 pmore mqsfcjxxpx_h 改成 pmore pmorecs，  title="展开"  改成 class="pmore pmorecs" title="展开"

	有无同业竞争人员情况、
	有无家属或亲属或恋人在公司任职情况  	
	有无犯罪记录
	
	同上

	
	
8、id 为 hasDisease  样式调整
	<div class="fl" style="width: 43%;text-align: right;padding-right:10px">有无传染病史或重大疾病史</div>
										<select name="talentMain.hasDisease" id="hasDisease" class="ctform selectact fl" ctdata="sfyjbjl" style="width: 20%;margin-top: 10px">
										
id  为  hasCriminalRecord ，id 为isRelativeIn ，id为isNowtraining  同上调整

此外，简历查看页面也需要对应调整。入口为点击：录用结果查询，弹出页面

#jp_jyjl1 ，div 中 教育经历 去掉rchead div

#checkExperienceOrNot  rchead div



头像处：float:right;padding-top:30px;margin-right: 30px ；改成  max-height: 240px;


工作单位  居左

=======================
apply_success.html





1、底部栏不要？？（为什么要？内容也不是最新的）