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
import CloseModal from './CloseModal';
import Alert from './admin/AlertMessage';

export default {
  name: 'UserHome',
  components: {
    UserNavbar,
    UserFooter,
    CloseModal,
    Alert,
  },
}
</script>

