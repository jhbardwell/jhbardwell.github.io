let imageList = [
    "https://imgs.xkcd.com/comics/purity.png",
    "https://raw.githubusercontent.com/jhbardwell/jhbardwell.github.io/main/images/header.png",
    "https://raw.githubusercontent.com/jhbardwell/Narrative-Exploration-Program/main/images/header.png",
    "https://raw.githubusercontent.com/jhbardwell/Newsletter-Concatenation-Program/main/images/header.png",
    "https://raw.githubusercontent.com/jhbardwell/Research-Data-Manager-Program/main/images/header.png",
    ];

let preloadImages = function () {
    for(let i = 0; i < imageList.length; i++ ) {
        let imageObject = new Image();
        imageObject.src = imageList[i];
    }
}

preloadImages();