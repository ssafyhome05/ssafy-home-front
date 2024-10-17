<template>
    <div
    class="modal fade"
    id="login-modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >

    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-6" id="exampleModalLabel">Login</h1>
          <button
            type="button"
            class="btn-close"
            @click="closeLoginModal"
          >
          <!-- data-bs-dismiss="modal"
            aria-label="Close" -->
            
            </button>
        </div>
        <div class="modal-body mb-5 mt-5">
          <form action="" method="post" id="login-form">
              <!-- input -->
              <!-- id -->
              <div class="id-box login-input-box">
                    <input type="text" v-model="user.userId" class="id input" required />
                    <label>Id</label>
                    <span></span>
              </div>
              <!-- password -->
              <div class="pw-box login-input-box">
                    <input type="password" v-model="user.userPassword" class="pw input" required />
                    <label>Password</label>
                    <span></span>
              </div>

              <!-- login button -->
              <input  type="submit" class="login button" value="LOGIN">

              <!-- kakao login -->
              <a id="kakao-login" class="button">
                  <img :src="kakao">
              </a>

              <!-- google login -->
              <a id="google-login" class="button">
                  <img :src="google">
              </a>
              
          </form>
          <button class="go-regist mt-1" @click="openRegistModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
            Regist
          </button>
          <br/>
          
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
    name: 'LoginModal',
    data() {
    return {
      // kakao: require("../assets/images/kakao_login_medium.png"),
      kakao: require("../assets/images/kakaologin.png"),
      google: require("../assets/images/web_light_sq_ctn@2x.png"),

      user: {
        userId: "",
        userPassword: "",
      },
    };
  },
    methods: {
      closeLoginModal() {
        const modalElement = document.getElementById('login-modal');
        const modalInstance = Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      },

      openRegistModal(){
        this.closeLoginModal();
        const modalElement = document.getElementById('regist-modal');
        const modalInstance = new Modal(modalElement, {
            // backdrop: true, // 배경 클릭해도 모달이 닫히지 않도록 설정
            // keyboard: true,    // ESC 키로 모달을 닫을 수 없게 설정
        });
        modalInstance.show();
      },
    }
}
</script>

<style>

</style>