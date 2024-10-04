// set time
    const headerTime = document.querySelector('.header-content--time')
    setInterval(()=>{
        let objTime = new Date();
        let timehour= objTime.getHours();
        let timeminute = objTime.getMinutes();
        let timesecond = objTime.getSeconds();
        let check;
        if(timehour < 10) timehour = `0${timehour}`
        if(timeminute < 10) timeminute = `0${timeminute}`
        if(timesecond < 10) timesecond = `0${timesecond}`
        if(timehour > 12) check = `PM <i class="fa-solid fa-moon"></i>`
        else check = `AM <i class="fa-solid fa-sun"></i>`
        let time = `<div>${timehour}:${timeminute}:${timesecond} ${check}</div>`
        console.log(time)
        headerTime.innerHTML = time;
    }, 1000)
// set time


// header-bar-menu
    const header_nav = document.querySelector('.header-nav');
    const mobilebar = document.querySelector('.menu-bar');
    const heightmenu = header_nav.clientHeight;
    
    mobilebar.onclick = () => {
        let isClose = header_nav.clientHeight === heightmenu;
        if(isClose){
            header_nav.style.height = 'auto';
        }
        else {
            header_nav.style.height = null;
        }
    }
 // header-bar-menu

 // banner 
 
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
        introduce_twobuttom.classList.remove("open");
        hotdealbutton.classList.add('border-js');
        newbutton.classList.remove('border-js');
    }
    function showNew(){
        introduce_twobuttom.classList.add('open');
        introduce_onebuttom.classList.remove("open");
        hotdealbutton.classList.remove('border-js');
        newbutton.classList.add('border-js');

    }
    
    hotdealbutton.addEventListener('click', showHotdeal);
    newbutton.addEventListener('click', showNew);
    
    // làm xuất hiện hotdeal hoặc sắp ra mắt
    // trượt của hotdeal
    let index__introduce = 0;  // set index = 0
    // hàm chiếu slide
    function showSlide(index){ 
        const totalcontainer = container.children.length; // tìm số lenght của bự css
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
        const containerWidth = container.children[0].clientWidth // lấy thẻ chiều rộng của thẻ cha
        console.log(containerWidth);
        container.style.transform = `translateX(${- index__introduce * containerWidth}px)`; // dịch chuyển qua n px
    }
    function moveSlide(step){
        showSlide(index__introduce + step) // khi click mới nhảy
    }

    setInterval( ()=>{
        index__introduce++;
        showSlide(index__introduce); // sau 5s sẽ nhảy
    }, 5000)
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
    
    setInterval( ()=>{
        index__introduce_two++;
        showSlide_two(index__introduce_two);
    }, 5000)
    // trượt của sắp ra mắt
    
    window.onload = () => {
        introduce_onebuttom.classList.add('open');
        hotdealbutton.classList.add('border-js');
    }
    
    
    // main--introduce
    // main
    
    // footer
    const likebutton = document.querySelector('.icon-like');
    let likeText = Math.floor(Math.random() * (1000 - 10) + 10);
    console.log(likeText)
    likebutton.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${likeText}K`
    // footer
    

    