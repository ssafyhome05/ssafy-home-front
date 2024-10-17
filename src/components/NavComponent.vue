<template>
  <div class="menu">
    <nav class="clearfix">
      <ul class="clearfix">
        <li><a href="#">Home</a></li>
        <!--""<-여기 부분에 URL 작성하면 됨-->
        <li><a href="#">Community</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <div class="auth-box">
      <!-- data-bs-toggle="modal"
      data-bs-target="#login-modal" -->
      <button
        type="button"
        class="btn btn-primary"
        @click="openLoginModal"
        id="login-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
        </svg>

        Login
      </button>
    </div>
  </div>

  <!-- login Modal -->
   <LoginModal />
  
  <!-- Regist Modal -->
   <RegistModal />
</template>
<script>
import LoginModal from './LoginModal.vue';
import RegistModal from './RegistModal.vue';
import { Modal } from 'bootstrap';

export default {
  components:{
    LoginModal,
    RegistModal,
  },  
  data() {
    return {
      kakao: require("../assets/images/kakao_login_medium.png"),    
      google: require("../assets/images/web_light_sq_ctn@2x.png"),
    };
  },
  mounted() {
    window.addEventListener("wheel", this.doScroll, { passive: false });
  },

  beforeUnmount() {
    window.removeEventListener("wheel", this.doScroll);
  },
  methods: {
    openLoginModal() {
      const modalElement = document.getElementById('login-modal');
      const modalInstance = new Modal(modalElement, {
          // backdrop: true, // 배경 클릭해도 모달이 닫히지 않도록 설정
          // keyboard: true,    // ESC 키로 모달을 닫을 수 없게 설정
      });
      modalInstance.show();
    },
  },
};
</script>
<style scoped>
  @import "../assets/css/nav.css"; /* 경로는 home.css 위치에 따라 조정 */
</style>
