var lastpos = 0;

document.addEventListener('scroll',function(){
		
	let pos = document.documentElement.scrollTop || document.body.scrollTop;
	let windowHeight = document.documentElement.clientHeight || window.innerHeight;
	let sHeight = document.documentElement.scrollHeight;
	let pWidth = ((pos/(sHeight-windowHeight))*100);
		
	let top = document.getElementById('top');
	let percent = document.getElementById('percent');
		
	if (pos>top.clientHeight && (pos>=sHeight-windowHeight-100 || lastpos<=pos)){
		top.style.top = (-top.clientHeight)+'px';
	}else{
		top.style.top = 0;
	}
		
	percent.style.width = Math.ceil(pWidth)+'%';

    lastpos = pos;
		
},true);