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

    leftSide.lastChild.onclick = function(event) {
        event.stopPropagation();
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";
        if (numberOfFaces >= 50) {
            alert ("You Win!")
        }
        else {
            numberOfFaces += 5;
            generateFaces();
        }
    };

    document.body.onclick = function () {
        alert("Game Over!");
        document.body.onclick = null;
        leftSide.lastChild.onclick = null;
    };
}
generateFaces();

