		  function openFood(event,cityName)
		  {
			  //declare all variables//
			  var i, tabcontent,tablinks;
			  //get all elements with class="tabcontent" and hide them //
			  
			  tabcontent=document.getElementsByClassName("tabcontent");
			  for(i=0;i<tabcontent.length;i++)
				  
				  {
					  tabcontent[i].style.display="none";
					  }
					  //get all element with class="tablinks" and remove the class active//
					  
				tablinks=document.getElementsByClassName("tablinks");
			  for(i=0;i< tablinks.length;i++)
				  
				  {
					  tablinks[i].ClassName.replace=("active","");
					  }
					  
					  // Shoe the current tab, and add an "active" class to the button that open the tag // 
					  document.getElementById(cityName).style.display="block";
					  event.currentTarget.className+="active";
		  }

    
 
		  