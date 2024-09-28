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
// main
    // main--introduce
    const container = document.querySelector('.main-introduce__container-one');
    const container_two = document.querySelector('.main-introduce__container-two');
    const hotdealbutton = document.querySelector('.main-introduce__button--one');
    const newbutton = document.querySelector(".main-introduce__button--two")
    const introduce_onebuttom = document.querySelector(".main-introduce__list--content-one");
    const introduce_twobuttom = document.querySelector(".main-introduce__list--content-two")

    // làm xuất hiện hotdeal hoặc sắp ra mắt
    function showHotdeal(){
        introduce_onebuttom.classList.add('open');
        introduce_twobuttom.classList.remove("open")
    }
    function showNew(){
        introduce_twobuttom.classList.add('open');
        introduce_onebuttom.classList.remove("open")
    }
    
    hotdealbutton.addEventListener('click', showHotdeal);
    newbutton.addEventListener('click', showNew);
    
    // làm xuất hiện hotdeal hoặc sắp ra mắt
    // trượt của hotdeal
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
    // trượt của hotdeal


    // trượt của sắp ra mắt
    let index__introduce_two = 0;
    
    function showSlide_two(index){
        const totalcontainer_two = container_two.children.length;
        console.log(totalcontainer_two)
        if(index >= totalcontainer_two  ){
            index__introduce_two = 0;
        }
        else if(index < 0){
            index__introduce_two = totalcontainer_two - 1;
        }
        else {
            index__introduce_two = index;
        }
        console.log(index__introduce_two)
        const containerWidth_two = container_two.children[0].clientWidth
        console.log(containerWidth_two);
        container_two.style.transform = `translateX(${-index__introduce_two * containerWidth_two}px)`;
    }
    function moveSlide_two(step){
        showSlide_two(index__introduce_two + step)
    }


    // trượt của sắp ra mắt


    // main--introduce
    // main

    

    