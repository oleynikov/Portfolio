// Создание AJAX запроса
function createHttpRequest() {
	var httpRequest;
	var browser = navigator.appName;
	if (browser == "Microsoft Internet Explorer") {
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else {
		httpRequest = new XMLHttpRequest();
	}
	return httpRequest;
}

// Плавное изменение CSS свойства объекта
function SetTween	(	objectId,	// id элемента
						parameter,	// цсс параметр
						min,		// начальное значение
						max,		// конечное значение
						step,		// шаг изменения
						fps,		// изменений в секунду
						delay		// задержка начала исполнения		
					) {
	var paramDelta = max - min;
	var numOfSteps = Math.ceil ( paramDelta / step );
	var value;
	for ( var i=0 ; i<numOfSteps ; i++ ) {
		// На последнем шагу ставим финальное значение
		i + 1 == numOfSteps ?
			value = max :
			value = min + i * step;
		// Составляем "расписание"
		setTimeout("SetCssParameter('"+objectId+"','"+parameter+"','"+value+"')", i*1000/fps + delay );
	}
}

// Моментальное изменение CSS параметра
function SetCssParameter	(	objectId,	// ID объекта
								parameter,	// CSS параметр
								value		// Новое значение
							) {
	var object = document.getElementById(objectId);
	object.style[parameter] = value;
	if ( parameter == 'opacity' && value == 0 ) {
		object.style.visibility = 'hidden';
	}
	( parameter == 'opacity' && value > 0 ) ?
		object.style.visibility = 'visible' :
		true;
}

// Получение координат элемента
function getCoordinates ( element ) {
	var box = element.getBoundingClientRect();
	var body = document.body;
	var docElem = document.documentElement;
	var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var clientTop = docElem.clientTop || body.clientTop || 0;
	var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	var top  = box.top +  scrollTop - clientTop;
	var left = box.left + scrollLeft - clientLeft;
	return	{	top: Math.round(top),
				left: Math.round(left)
			}
}

function getSize ( element ) {
	return	{	width: element.clientWidth,
				height: element.clientHeight
			}
}

function element ( id ) {
	return document.getElementById(id);
}

function getScroll(){
	var html = document.documentElement;
	var body = document.body;
	var htmlTop = html.scrollTop;
	var bodyTop = body.scrollTop;
	var htmlLeft = html.scrollLeft;
	var bodyLeft = body.scrollLeft;
	var top,left;
	htmlTop > bodyTop ? top = htmlTop : top = bodyTop ;
	htmlLeft > bodyLeft ? left = htmlLeft : left = bodyLeft;
	return {'top':top,'left':left};
}