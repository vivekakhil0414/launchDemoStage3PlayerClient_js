

function launchDemoStage3Player(session_id, promotion_id,startTime,reseller_id ) 
{
		var initialW = 250;
        var initialH = 200;
        var x = (screen.width/2)-initialW/2;
        var y = (screen.height/2)-initialH/2;
       
	    var params = "toolbar=0,resizable=1,scrollbars=0,status=0,menubar=0,width=" + initialW + ",height=" + initialH + ",top=" + y + ",left=" + x + " ";       
       
       // var params = "toolbar=no,resizable=yes,width=" + initialW + ",height=" + initialH + ",top=" + y + ",left=" + x + " ";       
        
  
		var timer = new Date();
		var CurHour = timer.getHours();
		var CurMinute = timer.getMinutes();
		var CurSecond = timer.getSeconds();
        var title = 'DS3' + '_' + CurHour + CurMinute + CurSecond;
		
		var openerURL="";
		var encrOpenerURL="";
		
		if(document.getElementById("frame_type_alk")!=null)
		{
			openerURL = document.getElementById("frame_type_alk").value;
			encrOpenerURL = openerURL + Encrypt('||'+timer); 	
		}
		
		if(openerURL == "")
		{
			openerURL = window.location.href;
			encrOpenerURL = Encrypt(openerURL + '||'+timer); 	
		}
		
	/*url = "http://www.demosondemand.com/DemoStage3/index.asp?sessID=" + session_id + '&promotion_id=' + promotion_id +'&startTime='+ startTime + '&reseller_id=' + reseller_id + '&eo=' + encrOpenerURL;
	*/ 
    //url = "http://www.demosondemand.com/html5/?sessID=" + session_id + '&promotion_id=' + promotion_id +'&startTime='+ startTime + '&reseller_id=' + reseller_id + '&eo=' + encrOpenerURL;
	
	url = "https://www.demosondemand.com/dod_staging/app.js/html5/sessID/" + session_id + '/promotion_id/' + promotion_id +'/startTime/'+ startTime + '/reseller_id/' + reseller_id + '?eo=' + encrOpenerURL;
	 
	var win = window.open(url, title, params);
	win.focus();

}

function launchHTML5Player(session_id, promotion_id,startTime,reseller_id ) 
{

		var initialW = 250;
        var initialH = 200;
        var x = (screen.width/2)-initialW/2;
        var y = (screen.height/2)-initialH/2;
        var params = "toolbar=0,resizable=1,scrollbars=0,status=0,menubar=0,width=" + initialW + ",height=" + initialH + ",top=" + y + ",left=" + x + " ";       
        //var params = "toolbar=no,resizable=yes,width=" + initialW + ",height=" + initialH + ",top=" + y + ",left=" + x + " ";       
        
  
		var timer = new Date();
		var CurHour = timer.getHours();
		var CurMinute = timer.getMinutes();
		var CurSecond = timer.getSeconds();
        var title = 'DS3' + '_' + CurHour + CurMinute + CurSecond;
		
		var openerURL="";
		var encrOpenerURL="";
		
		if(document.getElementById("frame_type_alk")!=null)
		{
			openerURL = document.getElementById("frame_type_alk").value;
			encrOpenerURL = openerURL + Encrypt('||'+timer); 	
		}
		
		if(openerURL == "")
		{
			openerURL = window.location.href;
			encrOpenerURL = Encrypt(openerURL + '||'+timer); 	
		}
		
	 //url = "http://www.demosondemand.com/html5/index.aspx?sessID=" + session_id + '&promotion_id=' + promotion_id +'&startTime='+ startTime + '&reseller_id=' + reseller_id + '&eo=' + encrOpenerURL;
	 
	 url = "https://www.demosondemand.com/dod_staging/app.js/html5/sessID/" + session_id + '/promotion_id/' + promotion_id +'/startTime/'+ startTime + '/reseller_id/' + reseller_id + '?eo=' + encrOpenerURL;
	 
    
	var win = window.open(url, title, params);
	win.focus();

}

function Encrypt(text) 
{
  output = "";
  
  for (i = 0; i < text.length; i++) 
  {
   ch = text.charCodeAt(i).toString();
   
   
   if      ( ch.length == 1 ) { ch = "00" + ch; }
   else if ( ch.length == 2 ) { ch = "0" + ch; }
   else if ( ch.length == 3 ) { ch = "" + ch; }
   else    { ch = "" + ch.toString().substring(0,2); } 
   
   output += "" + ch;	
  }

return output;
}


function launchHTML5Player_staging(session_id, promotion_id,startTime,reseller_id ) 
{
		var initialW = 250;
        var initialH = 200;
        var x = (screen.width/2)-initialW/2;
        var y = (screen.height/2)-initialH/2;
       
        var params = "toolbar=no,resizable=yes,width=" + initialW + 
",height=" + initialH + ",top=" + y + ",left=" + x + " ";       
        
  
		var timer = new Date();
		var CurHour = timer.getHours();
		var CurMinute = timer.getMinutes();
		var CurSecond = timer.getSeconds();
        var title = 'DS3' + '_' + CurHour + CurMinute + CurSecond;
		
		var openerURL="";
		var encrOpenerURL="";
		
		if(document.getElementById("frame_type_alk")!=null)
		{
			openerURL = document.getElementById("frame_type_alk").value;
			encrOpenerURL = openerURL + Encrypt('||'+timer); 	
		}
		
		if(openerURL == "")
		{
			openerURL = window.location.href;
			encrOpenerURL = Encrypt(openerURL + '||'+timer); 	
		}
		
		
	 url = "http://staging.demosondemand.com/html5/index.aspx?sessID=" + session_id + '&promotion_id=' + promotion_id +'&startTime='+ startTime + '&reseller_id=' + reseller_id + '&eo=' + encrOpenerURL;
	 
    
	var win = window.open(url, title, params);
	win.focus();

}