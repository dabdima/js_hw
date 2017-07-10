
function writeCookie(name, value, days) {
	//По умолчанию куки явл. временными, не имея срока хранения
	var expires = "";
	
	//Указав число дней делаем куки постоянными
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toGMTString();
	}
	
	//Присвоение имени куки, значение и срок хранения
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	//Поиск конкретного куки и возвращение его значения
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for(var i=0; i < cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
			return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	//Удаление выбранного куки
	writeCookie(name, "", -1);
}