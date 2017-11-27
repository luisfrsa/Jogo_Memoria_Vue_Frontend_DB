<template>
  <div class="greetings">
    <div class="user-box white-box">
      <h1 class="l-s-color">Jogo da Memória DB1</h1>   
      <p class="l-align-center">
          Olá <span class="l-p-color">{{name}}</span> <br/>seja bem-vindo ao Jogo da Memória DB1.<br/>
      </p>    
      <form v-on:submit="initGame" >
        <div class="form-group">
          <label for="name" class="l-left">Digite seu nome</label>
          <input id='name' type="text" v-on:keyup="check_name(name)" v-model="name" class="form-control" placeholder="No mínimo 3 caracteres"><br/>
        </div>
        <div class="form-group">
          <label for="name" class="l-left">Digite a quantidade de peças</label>
          <input type="number" v-on:keyup="check_number(number_of_cards)" v-model="number_of_cards" class="form-control" placeholder="No mínimo 10"><br/>
        </div>
        <button class="btn btn-primary" v-bind:disabled="!valid_input">Iniciar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data () {
    return {
      name:'',
      valid_input:false,
      number_of_cards:null,
      min:{
        cards:10,
        name_len:3,
      },
    }
  }
  ,methods:{
    initGame:function(e){
      e.preventDefault();
      this.$emit('init',{name:this.name,number:this.number_of_cards});
    },
    update_valid_input:function(number,name){
      this.valid_input = (name.length>=this.min.name_len) && (number>=this.min.cards);
    },
    check_name:function(name){
      this.update_valid_input(this.number_of_cards,name);
    },
    check_number:function(number){
      this.update_valid_input(number,this.name);
    },
  }
}
</script>
<!--
<style lang="scss" scoped>
  @import "../assets/scss/styles.scss"
</style>
-->
