<template>
  <div class="game">
    <h1>This is game page</h1>
    <level-menu v-if='!currentLevel'></level-menu>
  </div>
</template>

<script>
import LevelMenu from '@/components/levelMenu/LevelMenu'

export default {
  name: 'GameView',
  components: {
    LevelMenu
  },
  computed: {
    currentLevel () {
      return this.$store.state.levels.currentLevel
    }
  }
}
</script>
