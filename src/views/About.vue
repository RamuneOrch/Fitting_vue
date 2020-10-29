<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KossieCoder title="Hello Mother fucker"/>
    <Test title="1"/>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';
import Test from '@/components/test'

export default {
  components: {
    KossieCoder,
    Test
  },
}
</script>
