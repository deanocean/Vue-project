<template>
  <div>
    <section class="flow form-row align-items-center text-center justify-content-center mt-5">
      <div class="flow-item col-3 mx-4">
        <div class="alert alert-light alert-rounded mb-0 border-0" role="alert"
        :class="{ 'active' : currentPage === 1 || 2 || 3 }">1. 輸入訂單資料</div>
      </div>
      <div class="flow-item col-3 mx-4">
        <div class="groove alert alert-light alert-rounded mb-0 border-0 step-line" role="alert"
        :class="[{ 'active' : currentPage === 2 },{ 'active' : currentPage === 3 }]"
        >2. 結帳</div>
      </div>
      <div class="flow-item col-3 mx-4">
        <div class="groove alert alert-light alert-rounded mb-0 border-0 step-line" role="alert"
        :class="{ 'active' : currentPage === 3 }">3. 完成</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['currentPage'],
}
</script>

<style lang="scss" scoped>
.step-line {
  position: relative;
}
.step-line::before {
  content: '';
  position: absolute;
  background: #fff;
  width: 100%;
  height: 14px;
  top: 50%;
  left: -99%;
  transform: translateY(-50%);
  z-index: -1;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.alert.active {
  background-image: linear-gradient(0deg, #2445eb 60%, #1d39c5);
  color: #fff;
  &::before {
    background-image: linear-gradient(0deg, #2445eb 60%, #1d39c5);
  }
}
.flow-item {
  .alert {
    border-radius: 50px !important;
  }
}
.groove {
  background-color: #2880A6;
  box-shadow: 0 12px 8px -10px inset rgba(0, 0, 0, 0.15);
  color: #ccc;
  &::before {
    background-color: #2880A6;
    box-shadow: 0 8px 8px -10px inset rgba(0, 0, 0, 0.15);
  }
}
</style>