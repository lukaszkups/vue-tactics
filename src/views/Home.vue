<template>
  <main-menu></main-menu>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/mainMenu/MainMenu'

export default {
  name: 'Home',
  components: {
    MainMenu
  },
  mounted () {
    this.$store.dispatch('levels/updateCurrentLevel', null)
  }
}
</script>
