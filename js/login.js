/**
 * Created by John on 2017/8/19.
 */
$(function() {
	//清除输入 
    $('.close').click(function(event) {
    	$(this).siblings('input').val('');
    });
});