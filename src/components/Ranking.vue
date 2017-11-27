<template>
  <div class="ranking">
    <div v-on:insertRanking="postRankingAPI($event)" class="container white-box">
      <h1 class="l-s-color">Ranking</h1>   
      <table class="table table-striped">
        <tr>
          <th>Posição</th>
          <th>Nome</th>
          <th>Pontuação</th>
          <th>Quantidade de peças</th>
        </tr>
        <tr v-for="(user,index) in sortRanking">
          <td>{{index+1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.score}}</td>
          <td>{{user.num_cards}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props:{
    msg:{
      type:String,
      default:'',
    }
  },
  data:function(){
    return{
      users:[]
    }
  },
  methods:{
   
    getRankingAPI:function(){  
    this.$http
        .get('http://localhost:8080/api/memory-users')
        .then(function(resp){
          this.users = resp.data;
        });
    },
    updateRanking:function(u){
      var users = localStorage.getItem("ranking");
      users.push(u);
      localStorage.setItem("ranking",users);
    }
  },
  beforeMount(){
    this.getRankingAPI();
  },
  computed: {
    sortRanking: function () {      
      return this.users.sort(function(first,second){
        return first.score-second.score;
      });
    }
  },
}
</script>

