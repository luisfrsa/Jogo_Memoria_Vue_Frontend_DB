<template>
  <div class="home">
  <greeting 
        v-on:init="updateConfig($event)"  
        v-if="!game"></greeting>
  <game v-on:done="updateRanking($event)" 
        v-on:reset_home="reset_home($event)" 
        v-if="game" 
        v-bind:user="user.name"
        v-bind:num_cards="num_cards"></game>
  </div>  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      user: {name:'',score:0},
      num_cards:0,
      game:false,
    }
  },
  methods:{
    updateConfig:function(param){
      this.user.name=param.name;
      this.num_cards=parseInt(param.number);
      this.game=true;
    },
    updateRanking:function(param){
      this.user.score=param;
      this.postRankingAPI({name:this.user.name,score:this.user.score,num_cards:this.num_cards});
    },
    postRankingAPI:function(user){  
      this.$http
          .post('http://localhost:8080/api/memory-users',user)
          .then(function(response){
                }, function(error){
                  alert("Erro ao enviar para API");
                  console.log(error.data);
                });
    },
    reset_home:function(){
      this.user= {score:0};
      this.num_cards=0;
      this.game=false;
    }
  }
}
</script>
