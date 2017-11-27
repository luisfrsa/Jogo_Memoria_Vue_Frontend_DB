<template>
  <div id="app">
  	<nav class="app-nav">
  		<router-link to="/">Início</router-link>
  		<router-link to="/ranking">Ranking</router-link>
  	</nav>
  	<router-view/>
  </div>
</template>

<script> 
export default {
  name: 'app'
}
</script>