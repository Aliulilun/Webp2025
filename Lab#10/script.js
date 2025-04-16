
var imglist_Url = 'https://api.flickr.com/services/rest/? method=flickr.photos.getRecent&api_key=ca370d51a0548360075 19a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';
var img_Url = 'https://api.flickr.com/services/rest/? method=flickr.photos.getSizes&api_key=ca370d51a054836007519a0 0ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';
function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',imglist_Url, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        add_new_img(data);
    }
}
function add_new_img(dataset) {
    var gal = document.getElementById("gallery");
    dataset.forEach(function(item) {
        console.log(item);
        var img = document.createElement("img");
        img.setAttribute("src", item.urls.small);
        gal.appendChild(img);
    });
}