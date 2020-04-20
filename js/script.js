function ajouter(){
    const url = document.getElementById("url").value;
    console.log(url)
    document.getElementById("liste_music").innerHTML+='<li onclick="toPlay()"><a href="#">' + url+'</a> <button>supprimer</button></li>';
}



function toPlay(){
    document.getElementById("player").innerHTML=  '<source  src="http://michael.peopleofhonoronly.com/mp3/Total_Eclipse_of_the_Heart.mp3" type="audio/mpeg" ></source>'
}
