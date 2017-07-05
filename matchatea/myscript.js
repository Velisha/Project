
//Image array with next and previous buttons
var imagesAry = ["images/products/morning_matcha.jpg", 
"images/products/sugar_destroyer_matcha.jpg", 
"images/products/gotcha_matcha.jpg"];
var i = 0;
   //var a = document.getElementById("MyImage");
function loadData()
{ var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	var myArr=JSON.parse(xhttp.responseText);
    	var JsArray=myArr.allProducts;
    	
     document.getElementById("desc").innerHTML = JsArray[0].product_description ;
     document.getElementById("ship").innerHTML = JsArray[0].shipping_details ;
     document.getElementById("price").innerHTML = JsArray[0].price ;
     document.getElementById("MyImage").src = JsArray[0].image_path ;
    }
  };
  xhttp.open("GET", "matcha.json", true);
  xhttp.send();
	}
	
	
function nextImage(){

		if( i < imagesAry.length-1){
			i++;
		}
		else{
			i = 0;			
		}
//a.src = imagesAry[i];
	{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){
			var myArr = JSON.parse(xhttp.responseText);
			var JsArray = myArr.allProducts;
 
			document.getElementById("desc").innerHTML = JsArray[i].product_description;
			document.getElementById("ship").innerHTML = JsArray[i].shipping_details;
			document.getElementById("price").innerHTML = JsArray[i].price;
			document.getElementById("MyImage").src = JsArray[i].image_path;
		}
	};
	xhttp.open("GET","matcha.json",true);
	xhttp.send();
	localStorage.setItem('value',i);
}	
}

function prevImage(){
	if(i > 0){
		i--;		
	}
	else{
	 i=(imagesAry.length-1);
	}
//a.src = imagesAry[i];
	{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var myArr = JSON.parse(xhttp.responseText);
			var JsArray = myArr.allProducts;

			document.getElementById("desc").innerHTML = JsArray[i].product_description;
			document.getElementById("ship").innerHTML = JsArray[i].shipping_details;
			document.getElementById("price").innerHTML = JsArray[i].price;
			document.getElementById("MyImage").src = JsArray[i].image_path;
		}
	};
	xhttp.open("GET","matcha.json",true);
	xhttp.send();
	localStorage.setItem('value',i);
}
}

function buy(){
	window.location.href="custform.html";
}

// load selected JSON data on Page2 - custform.html

function loadPage2(){
    i = localStorage.getItem("value");
 	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	var myArr=JSON.parse(xhttp.responseText);
    	var JsArray=myArr.allProducts;
    	
     document.getElementById("desc1").innerHTML = JsArray[i].product_description ;
     document.getElementById("ship1").innerHTML = JsArray[i].shipping_details ;
     document.getElementById("price1").innerHTML = JsArray[i].price ;
     document.getElementById("MyImage1").src = JsArray[i].image_path ;
    }
  };
  xhttp.open("GET", "matcha.json", true);
  xhttp.send();
  localStorage.setItem('value',i);
}	

function confirm(){
	window.location.href="confirm.html";
}


//Page3 - confirm.html
function loadPage3(){
    i = localStorage.getItem("value");    
 	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	var myArr=JSON.parse(xhttp.responseText);
    	var JsArray=myArr.allProducts;
    	
     document.getElementById("desc2").innerHTML = JsArray[i].product_description ;
     document.getElementById("ship2").innerHTML = JsArray[i].shipping_details ;
     document.getElementById("price2").innerHTML = JsArray[i].price ;
     document.getElementById("MyImage2").src = JsArray[i].image_path ;
    }
  };
  xhttp.open("GET", "matcha.json", true);
  xhttp.send();
  localStorage.setItem('value', i);
}	

 