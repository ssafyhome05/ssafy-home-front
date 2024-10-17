<template>
    <div class="success-checkmark">
        <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
        </div>
    </div>
</template>

<style scoped>
.success-checkmark {
  width: 60px;
  height: 120px; /* 전체 크기도 맞게 조정 */
}

.success-checkmark .check-icon {
  width: 160px; /* 두 배로 증가한 크기 */
  height: 160px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 8px solid #4CAF50; /* 테두리 두께 두 배로 */
}

.success-checkmark .check-icon::before, 
.success-checkmark .check-icon::after {
  content: '';
  height: 200px; /* 두께에 맞춘 높이 */
  position: absolute;
  background: #FFFFFF;
  transform: rotate(-45deg);
  box-sizing: content-box;
}

.success-checkmark .check-icon::before {
  top: 6px;
  left: -4px;
  width: 60px; /* 두 배로 증가 */
  transform-origin: 100% 50%;
  border-radius: 200px 0 0 200px;
}

.success-checkmark .check-icon::after {
  top: 0;
  left: 60px;
  width: 120px;
  transform-origin: 0 50%;
  border-radius: 0 200px 200px 0;
  animation: rotate-circle 4.25s ease-in;
}

.success-checkmark .check-icon .icon-line {
  height: 10px; /* 선 두께를 두 배로 증가 */
  background-color: #4CAF50;
  display: block;
  border-radius: 4px;
  position: absolute;
  z-index: 10;
}

.success-checkmark .check-icon .icon-line.line-tip {
  top: 92px; /* 위치 조정 */
  left: 28px;
  width: 50px; /* 선 길이 두 배로 증가 */
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}

.success-checkmark .check-icon .icon-line.line-long {
  top: 76px; /* 위치 조정 */
  left: 52px;
  width: 94px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}

.success-checkmark .check-icon .icon-circle {
  top: -8px;
  left: -8px;
  z-index: 10;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 8px solid #4CAF50;
}

.success-checkmark .check-icon .icon-fix {
  top: 16px;
  width: 10px; /* 두 배 두께 */
  left: 52px;
  z-index: 1;
  height: 170px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #FFFFFF;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 2px;
    top: 38px;
  }
  54% {
    width: 0;
    left: 2px;
    top: 38px;
  }
  70% {
    width: 100px;
    left: -16px;
    top: 74px;
  }
  84% {
    width: 34px;
    left: 42px;
    top: 96px;
  }
  100% {
    width: 50px;
    left: 28px;
    top: 90px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 92px;
    top: 108px;
  }
  65% {
    width: 0;
    right: 92px;
    top: 108px;
  }
  84% {
    width: 110px;
    right: 0px;
    top: 70px;
  }
  100% {
    width: 94px;
    right: 16px;
    top: 76px;
  }
}


</style>