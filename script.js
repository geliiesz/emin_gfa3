function stats(){
	var num1 = Math.ceil(Math.random() * 20);
	var num2 = Math.ceil(Math.random() * 20);
	var num3 = Math.ceil(Math.random() * 20);
    var alphbt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bignum;
    var name;
    var mins;
    var hours;
    var remins;

    document.getElementById("num1").innerHTML = num1;
	document.getElementById("num2").innerHTML = num2;
	document.getElementById("num3").innerHTML = num3;

    if(Math.max(num1, num2, num3) == num1&&num1 != num2&&num1 != num3){
		document.getElementById("bignum").innerHTML = "Apple Music has over " +num1+ " indie artists topping the charts!";
	}
	else if(Math.max(num1, num2, num3) == num2&&num2 != num1&&num2 != num3){
		document.getElementById("bignum").innerHTML = "Spotify has over " +num2+ " indie artists topping the charts!";
	}
	else if(Math.max(num1, num2, num3) == num3&&num3 != num1&&num3 != num2){
		document.getElementById("bignum").innerHTML = "YouTube Music has over " +num3+ " indie artists topping the charts!";
	}
    else{
        document.getElementById("bignum").innerHTML = "There seems to be a tie between platforms!";
    }

    if (num1 > 0){
		name = alphbt[num1];
		document.getElementById("name").innerHTML = "The top indie artist on all three platforms has a name that starts with the letter " +name+ ".";
	}
	else{
		document.getElementById("name").innerHTML = "Look's like the top indie artist's name starts with a symbol and not a letter.";
	}
    
    mins = num2 * num3;
    hours = parseInt((num2 * num3) / 60);
    remins = mins % 60;
	document.getElementById("time").innerHTML = "The total amount of time streamers listen to this indie artist is " +mins+ " minutes, or " +hours+ " hours and " +remins+ " minutes.";
}