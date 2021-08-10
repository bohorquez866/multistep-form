<template>
  <div class="user-card">
    <ul class="head">
      <li>{{ userInfo.name }}</li>
      <li>
        {{ userInfo.city }} {{ userInfo.state }}, {{ userInfo.country }}
        {{ userInfo.cep }}
      </li>
      <li>{{ userInfo.email }} {{ userInfo.phone }}</li>
      <li>{{ userInfo.userType }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
