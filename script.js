var numberOfFaces = 5;
var leftSide = document.getElementById('leftSide');
var rightSide = document.getElementById('rightSide');

function generateFaces() {
    for (var i = 0; i < numberOfFaces; i ++) {


        var img = document.createElement('img');
        img.src = "keenanAllen.png";
        img.style.left = Math.random() * 400 + 'px';
        img.style.top = Math.random() * 400 + 'px';
        leftSide.appendChild(img);
    }
    var leftSideClone = leftSide.cloneNode(true);
    leftSideClone.removeChild(leftSideClone.lastChild);
    rightSide.appendChild(leftSideClone);
}
generateFaces();

