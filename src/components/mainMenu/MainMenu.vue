<template>
  <div>
    <h1>Vue Tactics</h1>
    <nav><ul>
      <li>
        <router-link to="/game">Start Game</router-link>
        <router-link to="/about">About</router-link>
      </li>
    </ul></nav>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
};
</script>

<style lang="sass">
nav
  display: block
  margin: 0
  padding: 0

  ul
    display: inline-block
    margin: 0 auto
    padding: 0
    width: 300px

    li
      clear: both
      display: block

      a
        background: crimson
        border-radius: 3px
        color: white
        display: block
        margin: 10px 0
        padding: 20px
        text-align: center
        text-decoration: none

        &:hover
          background: lighten(crimson, 10)
</style>
