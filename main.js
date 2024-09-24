    let index__banner = 1;
    const changeImage = () => {
        let imgs = ["./assets/imgs/banner-img/banner--one.png", 
                    "./assets/imgs/banner-img/banner--two.png", 
                    "./assets/imgs/banner-img/banner--three.png", 
                    "./assets/imgs/banner-img/banner--four.png"
                ];
        document.getElementById('banner-img').src = imgs[index__banner]
        index__banner++;
        if(index__banner == 4){
            index__banner = 0;
        }
    } 
    setInterval(changeImage,5000)
    // banner 

    

    