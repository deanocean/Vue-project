<template>
  <div>
    <div class="container main-contant py-5">
      <h1 class="text-center mb-3 text-secondary">購物車頁面</h1>
      <section class="form-row align-items-center text-center">
        <div class="col">
          <div class="alert alert-success alert-rounded mb-0" role="alert">1.輸入訂單資料</div>
        </div>
        <div class="col">
          <div class="alert alert-light alert-rounded mb-0" role="alert">2.確認訂單</div>
        </div>
        <div class="col">
          <div class="alert alert-light alert-rounded mb-0" role="alert">3.完成</div>
        </div>
      </section>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="payment-title mt-4 mb-3">
            <span class="icon">
              <i class="far fa-file-alt"></i>
            </span> 購買資訊
          </h2>
          <table class="table table-sm table-striped shadow-sm">
            <thead class="bg-primary text-white">
              <tr>
                <th colspan="2" class="px-2">商品資訊</th>
                <th>數量</th>
                <th class="px-2 text-right">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle px-2">
                  <div class="cart-img mt-2" style="background-image: url(&quot;undefined&quot;);"></div>
                </td>
                <td class="align-middle px-2">
                  <div class="cart-title">測試的產品</div>
                  <!---->
                </td>
                <td class="align-middle px-2">
                  <div class="cart-unit text-primary">1 / 單位</div>
                </td>
                <td class="align-middle text-right text-success px-2">
                  <div class>NT$500</div>
                  <!---->
                </td>
              </tr>
              <tr>
                <td class="align-middle px-2">
                  <div
                    class="cart-img mt-2"
                    style="background-image: url(&quot;https://storage.googleapis.com/vue-course-api.appspot.com/kfa1401dc%2F1536564273083.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=UWHGq7n3q5Cajkt5QXr6KHQdL0lCXUmAW5WL%2FjqWHDC4u0%2BlWPwI%2FqBgws2N3Jh7Ql%2B8l%2B1wgMPCKJugO9IJ%2B4lJHfYnScmqYjRxWv7OJG2RK9g3048QfG%2FFRma3ANitgDeSAkvTCrCYbTykOSgTyR0eppQ080WbxgON1%2BEc%2FucUDR9xwUPnyVKCR4MGbYv%2FMaVZphT9w1k0oP96%2Ba%2B9h2gHYDF1VJHRwotYJy%2Ft1FWm1AnSh1i8xDcWe%2FwgSs%2FDxhpW6j0RklQMz7hfbkqmCH1X5xIwZxv4NlKiuKPavujuyMpEGyVCnalm2PXIUZCumJFnX1RQJ%2FIFlvd2ORLXiw%3D%3D&quot;);"
                  ></div>
                </td>
                <td class="align-middle px-2">
                  <div class="cart-title">多肉植栽盆栽(青藍色)</div>
                  <!---->
                </td>
                <td class="align-middle px-2">
                  <div class="cart-unit text-primary">1 / 盆</div>
                </td>
                <td class="align-middle text-right text-success px-2">
                  <div class>NT$399</div>
                  <!---->
                </td>
              </tr>
              <tr>
                <td class="align-middle px-2">
                  <div
                    class="cart-img mt-2"
                    style="background-image: url(&quot;https://storage.googleapis.com/vue-course-api.appspot.com/kfa1401dc%2F1536563569488.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=bIAgROEwX335Rkf7NYMDDa5dJJJOOwN0u55%2F5wqD3qQY4BOaqrz4qJ9%2Fjm8wloI0pKstBkmfVoUnhIHO5MIC0%2B26DmyJE7x8vwk30U7rVmXr%2Bd51osRyZlZZiOPe3b3walYLSx8e6qlNJNW3M3yHEe7SH6DcVajz7rgYccq6ytcGK5quie9sLKrXs1sRfB%2FhBsN4%2FgbaUJbZwfvWn37YRmjocRsWjhDCWPKuNEdNys%2BI4Y%2BFY3S9dEpGd4plZZWWsfF4%2BoS6XYuNj3Qf7YKFeHDfAyONdR31Na3Ban8X96qZi6AiYLfEtlPqWOYEgbimzEgqaiwKqg%2BBj%2BzW53OvHA%3D%3D&quot;);"
                  ></div>
                </td>
                <td class="align-middle px-2">
                  <div class="cart-title">精美擺飾花瓶(內含植物)</div>
                  <!---->
                </td>
                <td class="align-middle px-2">
                  <div class="cart-unit text-primary">1 / 瓶</div>
                </td>
                <td class="align-middle text-right text-success px-2">
                  <div class>NT$699</div>
                  <!---->
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end align-items-baseline px-2 pt-2">
            <span class="pr-3">總計</span>
            <span class="h4 text-success">NT$1,598</span>
          </div>
        </div>
        <div class="col-md-8">
          <hr class="my-4" />
          <h2 class="payment-title mb-3 mt-5">
            <span class="icon">
              <i class="far fa-paper-plane"></i>
            </span> 個人資訊
          </h2>
          <table class="table table-striped shadow-sm">
            <thead>
              <tr class="bg-primary text-white">
                <th colspan="2" class="py-1">訂單資料</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-dark">姓名</td>
                <td>拉</td>
              </tr>
              <tr>
                <td class="text-dark">電話</td>
                <td>43408903489023</td>
              </tr>
              <tr>
                <td class="text-dark">Email</td>
                <td>21312@gijoej.gjior</td>
              </tr>
              <tr>
                <td class="text-dark">地址</td>
                <td>htieoqpwrj</td>
              </tr>
              <tr>
                <td class="text-dark">付款狀態</td>
                <td>
                  <span class="text-danger font-weight-bold">尚未付款</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="float-right mb-4 btn btn-danger text-white">確認付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict';

//     window.addEventListener('load', function () {
//     var form = document.getElementById('needs-validation');
//     form.addEventListener('submit', function (event) {
//         if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//     }, false);
//     }, false);
// })();
</script>

<style lang="scss" scoped>
.list-group-item {
    border-radius: 50px!important;
    border-style: dashed;
    color: #04a2a3;
    margin-bottom: 5px;
}
</style>