let a = 1;
document.getElementById("seeMoreBtn").onclick = function() {
    
    
    const morePictures = document.getElementsByClassName("hidden");
    
    
    if (a % 2 == 0) {a++;
        for (let i = 0; i < morePictures.length; i++) {
            morePictures[i].style.display = "none";
        }
        this.textContent = "Показать еще";
    } else {
        a++;
        for (let i = 0; i < morePictures.length; i++) {
            morePictures[i].style.display = "block";
        }
        this.textContent = "Скрыть";
    }
};




