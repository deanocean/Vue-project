<template>
  <div>
    <UserNavbar />
    <router-view></router-view>
    <UserFooter />
    <CloseModal />
  </div>
</template>

<script>
import UserNavbar from './UserNavbar';
import UserFooter from './UserFooter';
import UserProducts from './UserProducts';
import CloseModal from './CloseModal';

export default {
  name: 'UserHome',
  data () {
    return {
    }
  },
  components: {
    UserNavbar,
    UserFooter,
    UserProducts,
    CloseModal,
  },
}
</script>

