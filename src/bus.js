import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// Message
// vm.$bus.$emit('messsage:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式

// 傳送購物車內容
// vm.$bus.$emit('getCartInfo', response.data.data);
// vm.$bus.$on('getCartInfo', (data) => {
//     vm.cart = data;
//   });

// 更新購物車內容
// vm.$bus.$emit('cartRefresh');
// vm.$bus.$on('cartRefresh', () => {
//     vm.getCart();
// });

// 刪除購物車內容
// vm.$bus.$emit("removeCart", id, title);
// vm.$bus.$on('removeCart', (id, title = '商品') => {
//   vm.prodId = id;
//   vm.title = title;
// });