const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
const mouse = document.getElementsByClassName('mouse_scroll')[0];
const menu = document.getElementsByClassName('menu')[0];
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

// 마우스 휠 이벤트 처리
window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        menu.style.display = "none"
        page++;
    }else if(e.deltaY < 0){
        menu.style.display = "flex";
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }

    wrap.style.top = page * -100 + 'vh';
},{passive:false}); // 디폴트 기능 제거 - 스크롤

// mouse 요소 클릭 이벤트 처리
mouse.addEventListener('click', () => {
    if (page < lastPage) {
        menu.style.display = "none"
        page++; // 다음 페이지로 이동
        wrap.style.top = page * -100 + 'vh'; // 페이지 이동
    }
});