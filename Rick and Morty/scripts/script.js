function apiEpisodes(){
    fetch("https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10")
    .then( res => res.json())
    .then( res=> res.map(data => `<a>Episode ${data.id}</a>`).join(""))
    .then( res => document.getElementById("Sidebar").innerHTML = res)
};

let = 
function allCaracters(name) {

}
apiEpisodes()
