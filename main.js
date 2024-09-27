    let index__banner = 1;
    const changeImage = () => {
        let imgs = ["./assets/imgs/banner-img/banner--one.png", 
                    "./assets/imgs/banner-img/banner--two.png", 
                    "./assets/imgs/banner-img/banner--three.png", 
                    "./assets/imgs/banner-img/banner--four.png",
                    "./assets/imgs/banner-img/banner--five.png",
                    "./assets/imgs/banner-img/banner--six.png"
                ];
        document.getElementById('banner-img').src = imgs[index__banner]
        index__banner++;
        if(index__banner == 6){
            index__banner = 0;
        }
    } 
    setInterval(changeImage,5000)
    // banner 
    
    // main--introduce
    const prev = document.querySelector('.main-introduce--prev');
    const next = document.querySelector('.main-introduce--next');
    const container = document.querySelector('.main-introduce__container');
    
    let index__introduce = 0;
    
    function showSlide(index){
        const totalcontainer = container.children.length;
        console.log(totalcontainer)
        if(index >= totalcontainer  ){
            index__introduce = 0;
        }
        else if(index < 0){
            index__introduce = totalcontainer - 1;
        }
        else {
            index__introduce = index;
        }
        console.log(index__introduce)
        const containerWidth = container.children[0].clientWidth
        console.log(containerWidth);
        container.style.transform = `translateX(${- index__introduce * containerWidth}px)`;
    }
    function moveSlide(step){
        showSlide(index__introduce + step)
    }
    
    
    
    // main--introduce


    

    