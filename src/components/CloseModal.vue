<template>
    <div>
        <div
        class="modal fade"
        id="removeModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title">刪除商品</h5>
                <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>是否確認刪除「{{title}}」</p>
            </div>
            <div class="modal-footer">
                <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
                >
                否
                </button>
                <button type="button" class="btn btn-outline-danger px-4"
                @click="removeCartItem">
                是
                </button>
            </div>
            </div>
        </div>
        </div>   
    </div>
</template>

<script>
export default { 
  data() {
      return {
          prodId: '',
          title: '',
      }
  },
  methods: {
    removeCartItem () {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${vm.prodId}`;
      vm.isLoading = true;
      this.$http.delete(api).then((response) => {
          // console.log(response.data)
          vm.$bus.$emit('cartRefresh');
          vm.isLoading = false;
          $('#removeModal').modal('hide');
      })
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('removeCart', (id, title = '商品') => {
      vm.prodId = id;
      vm.title = title;
    });
  },
}
</script>