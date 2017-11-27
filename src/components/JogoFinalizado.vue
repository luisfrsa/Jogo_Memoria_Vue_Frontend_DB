<template>
  <div class="jogo-finalizado">
    {{msg}}<br/>
    <span v-on:click="reset_game()">Jogar novamente</span>
    <router-link to="/ranking">Visualizar ranking</router-link>
  </div>
</template>

<script>
export default {
  name: 'JogoFinalizado',
  props:{
      msg:{
        type:String,
        default:'',
      }
  },
  methods:{
    reset_game:function(){
      this.$emit('reset_game');
    }
  }
}
</script>

