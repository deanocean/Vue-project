<template>
  <div>
    <UserNavbar />
    <Alert />
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
import Alert from './admin/AlertMessage';

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
    Alert,
  },
}
</script>

