<template>
  <NavComponent />

  <div class="wrap">
    <!-- container1 -->
    <div class="container">
      <video class="bg-video" playsinline autoplay muted loop>
        <source :src="bgmp4" type="video/mp4" />
      </video>

      <div class="masthead">
        <div class="masthead-content text-white">
          <div class="container-fluid px-4 px-lg-0">
            <h1 class="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
            <p class="mb-5">
              We're working hard to finish the development of this site. Sign up
              below to receive updates and to be notified when we launch!
            </p>

            <div class="mouse_scroll" @click="doMouseClick()">
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- social -->
      <div class="social-icons">
          <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
              <a class="btn btn-dark m-3" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg>
              </a>
              <a class="btn btn-dark m-3" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
              </a>
              <a class="btn btn-dark m-3" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
          </div>
      </div>
      
    </div>

    <!-- container2 -->
    <div class="container">
      
        <KakaoMapComponent ref="kakaoMapComponent" />
        <!-- Scroll to Top Button -->
        <button class="scroll-to-top" @click="scrollToTop">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
            <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
          </svg>
        </button>
    </div>
  </div>
</template>

<script>
//   import NavComponent from "@/components/NavComponent.vue";

import NavComponent from "./NavComponent.vue";
import KakaoMapComponent from "./KakaoMap.vue";

// const mouse = document.getElementsByClassName('mouse_scroll');

export default {
  name: "HomeComponent",
  components: {
    NavComponent,
    KakaoMapComponent,
  },
  data() {
    return {
      bgmp4: require("../assets/mp4/bg.mp4"),
      kakaoMap: null,
      page: 0, // page 변수를 data에 추가
    };
  },

  mounted() {
    window.addEventListener("wheel", this.doScroll, { passive: false });
    this.updateScrollButtonVisibility();
  },
  beforeUnmount() {
    window.removeEventListener("wheel", this.doScroll);
  },
  methods: {
    doScroll(event) {
      const container = document.getElementsByClassName("container");
      const lastPage = container.length - 1;
      const wrap = document.getElementsByClassName("wrap")[0];
      const menu = document.getElementsByClassName("menu")[0];

      event.preventDefault();

      if (event.deltaY > 0) {
        this.page++; // page 변수 사용
        menu.style.display ="none";
      } else {
        this.page--; // page 변수 사용
        menu.style.display ="flex";
      }

      // 페이지 경계 체크
      if (this.page < 0) {
        this.page = 0;
      } else if (this.page > lastPage) {
        this.page = lastPage;
        menu.style.display ="flex";
      }

      wrap.style.top = this.page * -100 + "vh";
      this.updateScrollButtonVisibility(); // 버튼 가시성 업데이트
      window.removeEventListener("wheel", this.doScroll);
    },
    
    scrollToTop() {
      const wrap = document.getElementsByClassName("wrap")[0];
      const goTop = document.getElementsByClassName("scroll-to-top")[0];
      const menu = document.getElementsByClassName("menu")[0];

      this.page = 0; // page를 0으로 초기화
      wrap.style.top = "0vh"; // 페이지를 맨 위로 이동
      menu.style.display ="flex";
      goTop.style.opacity = "0";
      
      window.addEventListener("wheel", this.doScroll, { passive: false });
    },

    updateScrollButtonVisibility() {
      const goTop = document.getElementsByClassName("scroll-to-top")[0];
      goTop.style.opacity = this.page > 0 ? "1" : "0";
    }
  },
};

</script>
<style scoped>
  @import "../assets/css/home.css";
  @import "../assets/css/styles.css";

/* @import '../assets/css/nav.css';  */
</style>
