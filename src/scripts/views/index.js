var indexTpl=require("../tpls/index.string");
 var util=require("../utils/commonUtils");

SPA.defineView("index",{
	html:indexTpl,
	bindEvents:{
		show:function(){
			var indexSwiper=new Swiper(".swiper-container",{
				onSlideChangeStart:function(swiper){
					var $li=$("#nav li").eq(swiper.activeIndex);
					util.setFocus($li);
				}
			})
			/*function dialog(){
				var html='<div class="mark" id="mark">'
				            +'<div class="dialogs">'
	                            +'<h5>取消订单</h5>'
	                            +'<span>您确认要取消订单？</span>'
	                            +'<p><span>确认</span><span>取消</span></p>'
	                        +'</div>'
				        +'</div>'
			}*/
			$(".m-qr").on("click",function(){
				$("#mark").css("top","0");
				$(".dialogs").find("h5").text("确认收货");
				$(".dialogs").find("span").text("我们将收到货款，欢迎下次合作");
				$(".p-qr").text("发表评价");
				$(".p-qx").text("订单详情");
			})
			$(".dialogs").find("i").on("click",function(){
				$("#mark").css("top","100%");
			})
			$(".m-qx").on("click",function(){
				$("#mark").css("top","0");
				$(".dialogs").find("h5").text("取消订单");
				$(".dialogs").find("span").text("您确认要取消该订单");
				$(".p-qr").text("确认");
				$(".p-qx").text("取消");
			})
		}
	}
})