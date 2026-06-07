let btn = document.getElementById("followBtn");
let followers = document.getElementById("followers");

let count = 120;
let followed = false;

btn.onclick = function(){

    if(followed === false){
        count++;
        followers.innerHTML = count;
        btn.innerHTML = "Following";
        followed = true;
    }
    else{
        count--;
        followers.innerHTML = count;
        btn.innerHTML = "Follow";
        followed = false;
    }

};