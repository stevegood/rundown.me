jQuery(function($){
	
	$('#resetPasswordBtn').click(function(){
		var d = $('<div>Are you sure? This is your last chance!</div>');
		d.dialog({
			title:"Notice!",
			modal:true,
			resizable:false,
			buttons:{
				YES:function(){
					d.dialog('close');
					$.getJSON(pwResetAction,{username:username},function(response){
						window.location = "/admin/showUser/" + username;
					});
				},
				NO:function(){
					d.dialog('close');
				}
			}
		});
	});
	
});