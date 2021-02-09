
	  	function showCity(menu)
	  	{
	  		
		    var opt=menu.getElementsByTagName("option" );
            
            for (var i=0; i<opt.length; i++) {
              var x=document.getElementById(opt[i].value);
              if (x) x.style.display="none";
            }
            var cat = document.getElementById(menu.value);
            if (cat) cat.style.display="block";
          }
	  			
	  		

	  		
	