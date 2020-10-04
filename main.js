jQuery(document).ready(function(){
	"use strict";
	$('#slidr-carousel').caroufredsel({
		resonsive:'true',
		width:'100%',
		circular:'true',
		scroll:{
			items:1,
			duration:500,
			pauseonHover:'true'
		}
		auto:'true',
		items:
		{
			visible:{
				min:1,
				max:1,
			},
			height:"variable"
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:'false'
		}
	});
});