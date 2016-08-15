var numberOfFaces = 5;
var leftSide = document.getElementById('leftSide');

function generateFaces() {
    for (var i = 0; i < numberOfFaces; i ++) {


        var img = document.createElement('img');
        img.src = "keenanAllen.png";
        img.style.left = Math.random() * 400 + 'px';
        img.style.top = Math.random() * 400 + 'px';
        leftSide.appendChild(img);
    }
}
generateFaces();
