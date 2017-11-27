<template>
  <div class="game">
    <div class="container white-box">
      <h1 class="l-s-color">Jogo da Memória DB1</h1>   
      <div class="row panel_data">
        <div class="l-left col-lg-3 col-md-3 col-sm-12 col-xs-12">
          Usuário: {{user}} 
        </div>
        
        <div class="l-align-center col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
          Pontuação: {{score}}
        </div>
        <div class="l-align-center col-lg-3 col-md-3 col-sm-12 col-xs-12">
          Pares restantes: {{to_discover}}
        </div> 
        <div class="l-right col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <a v-on:click="reset()" class="l-cursor-pointer">Reiniciar <i class="glyphicon glyphicon-repeat" aria-hidden="true"></i></a>
        </div>
      </div>
      
      <jogo-finalizado v-on:reset_game="reset($event)" v-show="(to_discover==0)" v-bind:msg="done_msg"></jogo-finalizado>
      <div class="row">
        <div v-for="(card,index) in cards" v-on:click="turn(card)" class="col-lg-2 col-md-2 col-sm-3 col-xs-4">
          <div class="card" v-bind:class="{card__is_turned:card.turn }" >
            <div class="card__flip">
              <div class="card__flip__desc">Carta[{{index+1}}] - DB1</div>
              <div class="card__flip__back l-align-center" v-bind:style="flip_bg(card.number)">
                <span v-if="card.turn">{{card.number}}</span>
              </div>
              <!-- {{card.turn}}
              {{card.number}} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props:{
    user:{
      type:String,
      default:'Guest',
    },
    num_cards:{
      type:Number,
      default:10,
    },

  },
  data:function(){
    return{
     cards:[],
     id:0,
     turneds:[],
     score:0,
     to_discover:JSON.parse(this.num_cards),
     done_msg:'',
     bg_colors:['#2a9361','#ffbf00','#e0e002','#80ff00','#00ffbf','#00ffff','#0080ff','#0000ff','#8000ff','#ff00ff','#ff0080']
   }
 },
 methods:{
  turn:function(card){
    var turneds = this.turneds;
    if(card.turn===false){
      switch(turneds.length){          
        case 0:
        this.score++;
        turneds.push(card); 
        card.turn = true;
        break;
        case 1:
        turneds.push(card); 
        card.turn = true;
        if(turneds[0].number===turneds[1].number){
          this.to_discover--;
        }
        break;
        case 2:
        this.score++;
        if(turneds[0].number!==turneds[1].number){
          turneds[0].turn = false;    
          turneds[1].turn = false;    
        }
        turneds.splice(0,2);
        turneds.push(card); 
        card.turn = true;
        break;
      }
    }
  },
  flip_bg:function(ind){
    return {
      background:this.bg_colors[ind%this.bg_colors.length]
    }
  },
  generateCards:function(){
    for(var i=0;i<this.num_cards;i++){
      this.cards.push({id:this.id++,number:i,turn:false});
      this.cards.push({id:this.id++,number:i,turn:false});
    }
  },
  shuffleCards:function(){
    /*from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array*/
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
  },
  reset:function(val){
    this.cards=[];
    this.id=0;
    this.turneds=[];
    this.score=0;
    this.to_discover=1;
    this.done_msg='';
    this.$emit('reset_home');
  }
},
beforeMount(){
  this.generateCards();
  this.shuffleCards();
},
watch:{
  to_discover:function(val){
    if(val===0){
      this.done_msg="Parabéns "+this.user+", você concluiu o Jogo da Memória DB1 em "+this.score+" jogadas";
      this.$emit('done',this.score);
    }
  }
}
}
</script>

