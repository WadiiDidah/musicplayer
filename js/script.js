function ajouter(){
    const url = document.getElementById("url").value;
    console.log(url)
    document.getElementById("liste_music").innerHTML+='<li><a href="#">' + url+'</a> <button>supprimer</button></li>';
}
