function ajouter(){
    const url = document.getElementById("url").value;
    document.getElementById("liste_music").innerHTML+='<li onclick="toPlay(this.children[0])"><a href="#">' + url+'</a> <button>supprimer</button></li>';
}



function toPlay(a){
    const url =a.innerHTML;
    console.log(url);
    document.getElementById("player").innerHTML=  '<source  src="' + url +'" type="audio/mpeg" ></source>'
    
}



