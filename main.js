window.onload = function(){
	const delay = 50;
	let btn = document.getElementById('button');
	btn.addEventListener('click', function(e){
		alert('alert');
	});
	const delay = 500;
	setInterval(function(){
		document.getElementById("counter").innerText ++;
	}, delay);
}
