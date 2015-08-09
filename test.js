var Square = function(num) {
    this.eRect = document.createElement("DIV");
    this.eRect.setAttribute("class", "box");
    this.eRect.setAttribute("id", 'box' + num);
    this.eRect.setAttribute("onclick", "splash('box" + num + "')");
    this.eRect.setAttribute("style", this.setStyle());
    this.animation();
};

Square.prototype.setStyle = function() {
    var top = Math.floor(Math.random() * 300);
    var left = Math.floor(Math.random() * 300);
    var r = Math.floor(Math.random() * 100) + 100;
    var g = Math.floor(Math.random() * 100) + 100;
    var b = Math.floor(Math.random() * 100) + 100;
    return 'top:' + top + 'px;left:' + left + 'px; background:rgb(' + r + ',' + g + ',' + b + ');'
};

Square.prototype.animation = function() {
    var color = this.eRect.style.backgroundColor;
    var rgb = color.match(/[0-9]{3}/g);
    var interval = setInterval(function() {
        for (var i = 0; i < 3; i++) {
            if (rgb[i] < 255) {
                rgb[i] = 3 + rgb[i] * 1;
            };
        };
        this.eRect.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    }.bind(this), 30);
};

var num = 0;
var boxContainer = document.getElementById('boxContainer');
var eBox;

function add() {
    num += 1;
    var eRect = new Square(num).eRect;
    console.log(eRect);
    boxContainer.appendChild(eRect);

}

function deleteBox() {
    if (!eBox) {
        alert("click rectangle");
        return;
    }
    boxContainer.removeChild(eBox);
    eBox = null;
}

function splash(target) {
    if (eBox) {
        eBox.classList.remove('splash')
    };
    eBox = document.getElementById(target);
    eBox.classList.add('splash');
    console.log(eBox);
}