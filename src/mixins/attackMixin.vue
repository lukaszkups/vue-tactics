<script>
export default {
  name: 'BattleMixin',
  methods: {
    calculateDamage (mechId, gearId) {
      const mech = this.$store.getters['mechs/getMechById'](mechId)
      const gear = this.$store.getters['gears/getGearById'](gearId)
      const minMultiplier = gear.accuracy * 100
      const damageMultiplier = Math.floor(Math.random() * (100 - minMultiplier + 1)) + minMultiplier
      return damageMultiplier * gear.attack * mech.attack
    },
    doDamage (attackerMechId, attackerGearId, attackedId) {
      const damagePayload = {
        id: attackedId,
        damage: this.calculateDamage(attackerMechId, attackerGearId)
      }
      this.$store.dispatch('mechs/updateMechHp', damagePayload)
    }
  }
}
</script>
