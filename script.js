document.addEventListener("DOMContentLoaded",function(){
	for(let i=0;i<9;i++){
		document.querySelector(".game").innerHTML += "<div class='block' pos=" + i + "></div>"
	}
	var winIndex = [
    	[1,2,3],
    	[4,5,6],
    	[7,8,9],
    	[1,4,7],
    	[2,5,8],
    	[3,6,9],
    	[1,5,9],
    	[3,5,7]
	];
	function getWiner(val){
		for(let i=0;i<winIndex.length;i++){
			if(JSON.stringify(winIndex[i]) == JSON.stringify(val)){
				alert("YOU WIN!!!");
			}
		}
	
	}
	let arrX = [];
	let arrY = [];
	let hod = 0;
	let game = document.querySelector(".game");
	let blocks = document.querySelectorAll(".block");
	let contentBlock = document.querySelectorAll(".content-block-1")
	game.addEventListener("click",function(evt){
		if(evt.target.className == "block"){
			if(hod%2 == 0){
				evt.target.innerHTML = "X";
				arrX.push(+evt.target.getAttribute('pos') + 1)
				let number = +evt.target.getAttribute('pos') + 1;
				number = "X";
				evt.target.addEventListener("click",function(evt){
					evt.stopPropagation()
				})
			} else {
				evt.target.innerHTML = "O";
				arrY.push(+evt.target.getAttribute('pos') + 1)
				let number = +evt.target.getAttribute('pos') + 1;
				number = "O";
				evt.target.addEventListener("click",function(evt){
					evt.stopPropagation()
				})
			}
			hod++;
		}
		getWiner(arrX)
		getWiner(arrY)
	})
})
