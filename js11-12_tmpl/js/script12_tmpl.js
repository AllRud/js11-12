$(function(){
// array  members[] does not contain the elements 
// with ID 20,40,50 and 60
	  var dataObject = {
	    members:[
	    {id:1, name:"p", text:"Руденко Александр Анатольевич"},
	    {id:2, name:"img", text:"<img src='img/myfoto.jpg' alt='Фото Руденко А.А.' title='Руденко A.A.'>"},
	    {id:10, name:"lines", text:"Окончил курсы QA в QA TestLab"},
	    {id:21, name:"why", text:"Фронтенд - востребованная специальность;"},
	    {id:22, name:"why", text:"Возможность получать достойный доход;"},
	    {id:23, name:"lines why ", text:"Фронтенд - это возможность самореализоваться."},
	    {id:41, name:"cont", text:"+380953440514"},
	    {id:51, name:"lines", text:"<a href='https:\/\/www.facebook.com\/Rudenko26' target='black' title='Моя страница Facebook'>http://facebook.com/Rudenko26</a>"},
	    {id:61, name:"cont", text:"Выучусь и смогу вместе с Вами разрабатывать сайты и получать достойный доход!"}
	    ]
	  }; // -> End of dataObject

	  var results = document.getElementById("results");
	  results.innerHTML = tmpl("item_tmpl", dataObject);

	}());