function MoveToCenter () {
	element('tableCopy').style.left = element('table').offsetLeft + 'px';
}
window.onscroll =	function () {
								if ( getScroll()['top'] > 49 ) {
									element('tableCopy').style.display='block';
								}
								else {
									element('tableCopy').style.display='none';
								}
								MoveToCenter();
							}
window.onresize = MoveToCenter;

