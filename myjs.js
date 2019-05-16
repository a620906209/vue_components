new Vue({
  el: '#my-app',
  components: {
    'my-component': httpVueLoader('newvue.vue')
  }
});