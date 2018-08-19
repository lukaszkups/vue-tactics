<template>
  <footer>
    Powered by <a href='http://github.com/mrmnmly/vue-tactics'>Vue Tactics</a> by <a href='http://mrmnmly.net'>mrmnmly</a>.
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass">
footer
  bottom: 10px
  color: slategrey
  left: 0
  position: fixed
  right: 0
  text-align: center

  a
    color: black
    text-decoration: none

    &:hover
      text-decoration: underline
</style>
