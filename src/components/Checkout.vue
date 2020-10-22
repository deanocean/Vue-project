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

      <div class="row mt-5">
        <div class="col-lg-4 col-md-5 order-md-1 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="check-title">購物清單</span>
            <span class="badge badge-secondary badge-pill text-white" style="font-size: 0.95rem;">3</span>
          </h4>
          <ul class="list-group mb-3 checkout-cart">
            <li class="align-items-center list-group-item d-flex justify-content-between py-1">
              <div class="text-center">
                <a href="javascript:;" class="btn-del btn">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
              <div>
                <div
                  class="cart-img mt-2 mx-1"
                  style="background-image: url(&quot;undefined&quot;);"
                ></div>
              </div>
              <div class="ml-1 mr-auto">
                <div class="cart-title">測試的產品</div>
                <div class="cart-unit">1 / 單位</div>
                <!---->
              </div>
              <div class="text-right text-success">NT$500</div>
            </li>
            <li class="align-items-center list-group-item d-flex justify-content-between py-1">
              <div class="text-center">
                <a href="javascript:;" class="btn-del btn">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
              <div>
                <div
                  class="cart-img mt-2 mx-1"
                  style="background-image: url(&quot;https://storage.googleapis.com/vue-course-api.appspot.com/kfa1401dc%2F1536564273083.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=UWHGq7n3q5Cajkt5QXr6KHQdL0lCXUmAW5WL%2FjqWHDC4u0%2BlWPwI%2FqBgws2N3Jh7Ql%2B8l%2B1wgMPCKJugO9IJ%2B4lJHfYnScmqYjRxWv7OJG2RK9g3048QfG%2FFRma3ANitgDeSAkvTCrCYbTykOSgTyR0eppQ080WbxgON1%2BEc%2FucUDR9xwUPnyVKCR4MGbYv%2FMaVZphT9w1k0oP96%2Ba%2B9h2gHYDF1VJHRwotYJy%2Ft1FWm1AnSh1i8xDcWe%2FwgSs%2FDxhpW6j0RklQMz7hfbkqmCH1X5xIwZxv4NlKiuKPavujuyMpEGyVCnalm2PXIUZCumJFnX1RQJ%2FIFlvd2ORLXiw%3D%3D&quot;);"
                ></div>
              </div>
              <div class="ml-1 mr-auto">
                <div class="cart-title">多肉植栽盆栽(青藍色)</div>
                <div class="cart-unit">1 / 盆</div>
                <!---->
              </div>
              <div class="text-right text-success">NT$399</div>
            </li>
            <li class="align-items-center list-group-item d-flex justify-content-between py-1">
              <div class="text-center">
                <a href="javascript:;" class="btn-del btn">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
              <div>
                <div
                  class="cart-img mt-2 mx-1"
                  style="background-image: url(&quot;https://storage.googleapis.com/vue-course-api.appspot.com/kfa1401dc%2F1536563569488.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=bIAgROEwX335Rkf7NYMDDa5dJJJOOwN0u55%2F5wqD3qQY4BOaqrz4qJ9%2Fjm8wloI0pKstBkmfVoUnhIHO5MIC0%2B26DmyJE7x8vwk30U7rVmXr%2Bd51osRyZlZZiOPe3b3walYLSx8e6qlNJNW3M3yHEe7SH6DcVajz7rgYccq6ytcGK5quie9sLKrXs1sRfB%2FhBsN4%2FgbaUJbZwfvWn37YRmjocRsWjhDCWPKuNEdNys%2BI4Y%2BFY3S9dEpGd4plZZWWsfF4%2BoS6XYuNj3Qf7YKFeHDfAyONdR31Na3Ban8X96qZi6AiYLfEtlPqWOYEgbimzEgqaiwKqg%2BBj%2BzW53OvHA%3D%3D&quot;);"
                ></div>
              </div>
              <div class="ml-1 mr-auto">
                <div class="cart-title">精美擺飾花瓶(內含植物)</div>
                <div class="cart-unit">1 / 瓶</div>
                <!---->
              </div>
              <div class="text-right text-success">NT$699</div>
            </li>
            <li class="list-group-item mt-1 list-item-total d-flex justify-content-between">
              <span>總額</span>
              <strong class="h5 mb-0 text-success">NT$1,598</strong>
            </li>
            <!---->
          </ul>
          <form class="card p-2">
            <div class="input-group">
              <input type="text" placeholder="請輸入優惠碼" class="form-control" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary text-white">送 出</button>
              </div>
            </div>
          </form>
          <!-- <a
            href="#/"
            class="btn btn-outline-primary btn-backShop mt-4 float-right router-link-active"
          >
            <i class="fas fa-caret-left"></i> 繼續購物
          </a> -->
        </div>
        <div class="col-lg-8 col-md-7 order-md-2">
          <h4 class="mb-3 check-title">訂單資訊</h4>
          <form class="checkout-form">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="name">姓名</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder
                  value
                  class="form-control"
                  aria-required="true"
                  aria-invalid="false"
                />
                <small class="text-danger" style="display: none;">請填入姓名</small>
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone">電話</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder
                  value
                  class="form-control"
                  aria-required="true"
                  aria-invalid="false"
                />
                <small class="text-danger" style="display: none;">請填入電話</small>
              </div>
            </div>
            <div class="mb-3">
              <label for="email">郵箱</label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder
                class="form-control"
                aria-required="true"
                aria-invalid="false"
              />
              <small class="text-danger"></small>
            </div>
            <div class="mb-3">
              <label for="address">收件地址</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder
                class="form-control"
                aria-required="true"
                aria-invalid="false"
              />
              <small class="text-danger" style="display: none;">請填入地址</small>
            </div>
            <div class="mb-3">
              <label for="memo">
                備註
                <small class="text-info">（選填）</small>
              </label>
              <textarea rows="5" name="memo" id="memo" placeholder class="form-control"></textarea>
            </div>
            <hr class="my-4" />
            <button type="submit" class="btn btn-primary btn-long btn-block">
              金流付款
              <i class="fas fa-caret-right"></i>
            </button>
          </form>
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