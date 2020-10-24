<template>
  <div>
    <div class="container main-contant py-5">
      <h1 class="h2 text-center mb-3 text-white">購物車頁面</h1>

      <UserCartFlow :currentPage="currentPage" />

      <div class="frame mx-auto mt-5 p-5 glass text-center text-white">
          <h2 class="h3 text-white mt-2 mb-4">付款完成！</h2>
          <router-link to="/">
            <button class="btn btn-outline-accent mt-4 mb-2">
              <i class="fas fa-caret-left"></i> 繼續購物
            </button>
          </router-link>
      </div>  
      
    </div>
  </div>
</template>

<script>
import UserCartFlow from "./UserCartFlow";

export default {
  data() {
    return {
      currentPage: 3,
    };
  },
  components: {
    UserCartFlow,
  },
};
</script>

<style lang="scss" scoped>
.frame {
  width: 100%;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}
</style>