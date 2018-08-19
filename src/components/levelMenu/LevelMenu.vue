<template>
  <div>
    <h2>{{ hoveredLevelName }}&nbsp;</h2>
    <ul class='levels-list'>
      <li 
        v-for='level in levels'
        :key='level.id'
        @mouseover='hoveredLevelName = level.name'
        @mouseout='hoveredLevelName = ""'
        @click='updateCurrentLevel(level.id)'
      >{{ level.id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LevelMenu',
  data () {
    return {
      hoveredLevelName: ''
    }
  },
  computed: {
    levels () {
      return this.$store.state.levels.list
    }
  },
  methods: {
    updateCurrentLevel (levelId) {
      this.$store.dispatch('levels/updateCurrentLevel', levelId)
    }
  }
}
</script>

<style lang="sass">
.levels-list
  display: block
  margin: 0 auto
  padding: 0
  width: 333px

  li
    background-color: crimson
    color: white
    cursor: pointer
    display: inline-block
    float: left
    height: 100px
    line-height: 100px
    list-style-type: none
    margin: 5px
    padding: 0
    text-align: center
    width: 100px

    &:hover
      background: lighten(crimson, 10)
</style>
