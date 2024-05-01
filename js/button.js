var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img1 = document.createElement("img");
        img1.src = "https://media1.tenor.com/m/bePXs1w8hGoAAAAC/sf-dance.gif"
        document.getElementById("demo").appendChild(img1);

        var img2 = document.createElement("img");
        img2.src = "https://media1.tenor.com/m/r_88w-svNpUAAAAd/pudgedance-pudge.gif"
        document.getElementById("demo").appendChild(img2);

        var img3 = document.createElement("img");
        img3.src = "https://media1.tenor.com/m/bePXs1w8hGoAAAAC/sf-dance.gif"
        document.getElementById("demo").appendChild(img3);
    }
}