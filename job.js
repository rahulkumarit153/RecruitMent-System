// JavaScript Documentfunction abc()
var myimages=new Array("im12.jpg","im13.jpg","im15.jpg","im16.jpg","im17.jpg","im18.jpg","im19.jpg","im20.jpg","im21.jpg","im22.jpg","im23.jpg","im24.jpg","im25.jpg","im26.jpg","im28.jpg","im29.jpg");
index_val=0;
function next_Image()
	{
		index_val++;
		if(index_val<myimages.length)
			{
				document.images["pic"].src=myimages[index_val];
			}
		else
			{
			index_val=0;
			document.images["pic"].src=myimages[index_val];	
			}
	}
function prev_Image()
	{
		index_val--;
		if(index_val>=0)
			{
				document.images["pic"].src=myimages[index_val];
			}
		else
			{
			index_val=myimages.length-1;
			document.images["pic"].src=myimages[index_val];	
			}
	}

function abc()
	{
		window.setTimeout("showTime()",1000);
	}
function showTime()
	{
		var m,x,y,l,d;
		d=new Date();
		l=d.getDay();
		switch(l)
			{
				case 1 : l="Monday";break;
				case 2 : l="Tuesday";break;
				case 3 : l="Wednesday";break;
				case 4 : l="Thursday";break;
				case 5 : l="Friday";break;
				case 6 : l="Saturday";break;
				case 0 : l="Sunday";break;
				
			}
		m=eval(d.getMonth());
		switch(m)
			{
				case 0 : m="January";break;
				case 1 : m="February";break;
				case 2 : m="March";break;
				case 3 : m="April";break;
				case 4 : m="May";break;
			 	case 5 : m="June";break;
				case 6 : m="July";break;
				case 7 : m="August";break;
				case 8 : m="September";break;
				case 9 : m="October";break;
				case 10 :m="November";break;
				case 11 :m="December";break;
				
			}
			x=l+" ,"+d.getDate()+"-"+m+"-"+d.getFullYear();
			y=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
			document.f1.tm.value=y;
			document.f1.dat.value=x;
			myid=window.setTimeout("showTime()",1000);
	}
/* slider image*/
