window.onload = function(){
<<<<<<< Updated upstream
	const delay = 50;
=======
	let btn = document.getElementById('button');
	btn.addEventListener('click', function(e){
		alert('alert');
	});
	const delay = 500;
>>>>>>> Stashed changes
	setInterval(function(){
		document.getElementById("counter").innerText ++;
	}, delay);
}
