<template>
  <div class="home">
    <MessageDisplay />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MessageDisplay from '@/components/MessageDisplay'

export default {
  name: "home",
  components: {
    HelloWorld,
    MessageDisplay
  }
};
</script>
