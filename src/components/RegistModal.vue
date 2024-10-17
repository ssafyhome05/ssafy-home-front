<template>
    <div
    class="modal fade"
    id="regist-modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">Regist</h1>
          <button
            type="button"
            class="btn-close"
            @click="closeRegistModal"
          >
          <!-- data-bs-dismiss="modal"
            aria-label="Close" -->
            
            </button>
        </div>
        <div class="modal-body">
          <form class="" @submit.prevent="registerUser" id="regist-form">
                <!-- id -->
                <div class="id-box input-box">
                    <input type="text" v-model="user.userId" class="id input" required>
                    <label>Id</label>
                    <span></span>
                    <a class="id-verify-btn" @click="duplicateCheck">중복</a>
                    <div class="success-box">
                        <SuccessWidget v-if="duplicateCheckIsSuccess" />
                    </div>
                    
                </div>  
                <!-- password -->
                <div class="pw-box input-box">
                    <input type="password" v-model="user.userPassword" class="password input" required />
                    <label>Password</label>    
                    <span></span>
                </div>
                <!-- Confirm password -->
                <div class="pwcomfirm-box input-box">
                    <input type="password" v-model="user.userPasswordConfirm" class="conform-password input" required />
                    <label>Comfirm password</label>
                    <span></span>
                </div>
                <!-- name -->
                <div class="name-box input-box">
                    <input type="text" v-model="user.userName" class="name input" required />
                    <label>Name</label>
                    <span></span>
                </div>
                <!-- email -->
                <div class="email-box input-box">
                    <input type="email" v-model="user.userEmail" class="email input" required />
                    <label>Email</label>
                    <span></span>
                    <a class="email-verify-btn" @click="sendVerifyEmail">전송</a>
                </div>
                <!-- verify email code -->
                <div class="verify-email-code code-input-box">
                    <input type="text" v-model="verifyEmailCode" class="email-code input" placeholder="인증코드" required />
                    <span></span>
                    <span class="timer" v-text="TimeStr"></span>
                    <a class="email-code-check-btn" >인증</a>
                </div>
                <!-- tel -->
                <div class="tel-box input-box">
                    <input type="tel" v-model="user.userPhone" class="tel input" required />
                    <label>Tel.</label>
                    <span></span>
                </div>
                <!-- address -->
                <div class="post-code-box input-box">
                    <input type="text" v-model="zonecode" class="post-code input" placeholder="우편번호" readonly />
                    <!-- <label>우편번호</label> -->
                    <a id="postcode" class="post-code-btn" @click="openPostcode">검색</a>
                </div>
                <div class="main-addr-box input-box">
                    <input type="text" v-model="roadAddress" class="main-address input" placeholder="주소" readonly /><br />
                    <!-- <label>주소</label> -->
                    <span></span>
                </div>
                <div class="detail-addr-box input-box">
                    <input type="text" v-model="detailAddress" class="detail-address input" required/>
                    <label>상세주소</label>
                    <span></span>
                </div>
                
                <!-- regist button -->
                <!-- <input type="submit" class="regist button" value="회원가입" /> -->

          </form>
          <!-- <button class="go-regist mt-1" @click="goLogin">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
            Login
          </button>
          <br/> -->
          
        </div>
        <div class="modal-footer">
          <!-- <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button> -->
          <button type="button" class="btn btn-primary"  @click="goLogin">Login</button>
          <button type="button" class="btn btn-primary" @click="registerUser">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import axios from 'axios';

import SuccessWidget from '@/widgets/SuccessWidget.vue';

export default {
    name: 'RegistModal',
    data() {
        return {
            kakao: require("../assets/images/kakao_login_medium.png"),
            // kakao: require("../assets/images/kakao_login_medium_narrow.png"),
            google: require("../assets/images/web_light_sq_ctn@2x.png"),
            user: {
                userId: "",
                userPassword: "",
                userName: "",
                userEmail: "",
                userPhone: "",
                userAddress: ""
            },

            // 주소
            zonecode: "",
            roadAddress: "",
            detailAddress: "",

            // 인증
            duplicateCheckIsSuccess: false,
            verifyEmailCode: "",

            TimeStr: "01:00",
        };
    },
    components: {
        SuccessWidget,  
    },
    methods: {
        async registerUser() {
            try {
                const response = await axios.post("/user", this.user, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.status === 201) {
                    alert("회원가입이 성공적으로 완료되었습니다.");
                } else {
                    alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
                }

            } catch (error) {
                console.error(error);
                alert("회원가입 중 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
            }
        },
        
        // 아이디 중복 체크
        async duplicateCheck(){
            try{
                const response = await axios.post("/check/duplicate", this.user.userId, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if(response.status == 200){
                    alert("사용가능한 아이디입니다.");
                    const btn = document.getElementsByClassName("id-verify-btn")[0];
                    btn.style.display = "none";
                    this.duplicateCheckIsSuccess = !this.duplicateCheckIsSuccess;
                }else{
                    alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
                }

            }catch(error){
                console.log(error);
                alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
            }

        },

        // 인증 이메일 전송
        async sendVerifyEmail() {    
            alert("인증 메일 전송 완료");
            // try{
            //     const response = await axios.post("/send/mail", this.user.userEmail, {
            //         headers: {
            //             "Content-Type": "application/json"
            //         }
            //     });

            //     if(response.status == 201){
            //         alert("인증 메일 전송이 완료되었습니다.");
            //     }else{s
            //         alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
            //     }

            // }catch(error){
            //     console.log(error);
            //     alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
            // }
        },

        // 메일 인증 확인
        checkEmail(){
            
        },

        // Daum 주소 API
        openPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분
                this.zonecode = data.zonecode;
                this.roadAddress = data.roadAddress;
                },
            }).open();
        },

        // Close regist modal
        closeRegistModal() {
            const modalElement = document.getElementById('regist-modal');
            const modalInstance = Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
                const btn = document.getElementsByClassName("id-verify-btn")[0];
                btn.style.display = "inline-block";
                this.duplicateCheckIsSuccess = !this.duplicateCheckIsSuccess;
            }
        },

        // close regist modal & show login modal
        goLogin(){
            this.closeRegistModal();
            const modalElement = document.getElementById('login-modal');
            const modalInstance = Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.show();
            }
        },
    }
}
</script>

<style>

</style>