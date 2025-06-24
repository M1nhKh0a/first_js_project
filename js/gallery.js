function upDate(previewPic){
    var src = previewPic.getAttribute("src");
    var alt = previewPic.getAttribute("alt");
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
    console.log("Image updated: " + alt);
}

function unDo(){
    let image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Hover over an image below to display here";
    console.log("Image reset.");
}

function initGallery(){
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.setAttribute("tabindex", "0");

        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("mouseout", function() { unDo(); });
        img.addEventListener("focus", function() { upDate(this); });
        img.addEventListener("blur", function() { unDo(); });

        console.log("Event listeners attached to image: " + img.alt);
    }
    console.log("Gallery initialized and tabindex set.");
}
