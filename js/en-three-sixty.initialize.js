$(function () {
    $('.three-sixty').threeSixty({pointers: {
		pointer1:{
				top:	'10px',
				left:	'80px',
			},
		pointer2:	{
				top:	'70px',
				left:	'168px',
		},
		pointer3:	{
				top:	'330px',
				left:	'68px',
		},
		pointer4:	{
				top:	'10px',
				left:	'135px',
		},
		pointer5:	{
				top:	'150px',
				left:	'175px',
		},
		pointer6:	{
				top:	'130px',
				left:	'95px',
		},
		pointer7:	{
				top:	'330px',
				left:	'215px',
		},
		pointer8:	{
				top:	'150px',
				left:	'180px',
		},
		pointer9:	{
				top:	'150px',
				left:	'85px',
		},
		addPointers: 'true',
		background: 'rgb(0, 135, 255)',
		detailBackground: '#000',
		color: '#fff'
		}});
	
	$('.three-sixty2').threeSixty({pointers: {
		pointer1:{
				top:	'100px',
				left:	'70px',
			},
		addPointers: 'true',
		background: 'rgb(123, 25, 25)',
		detailBackground: 'rgb(115, 115, 115)',
		color: '#eee'
		}});	
});
