const app = new Vue({
  el: '#app',
  data: {
    albumList: []
  },
  mounted() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(response => {
        //console.log(response.data.response);
        this.albumList = response.data.response
        console.log(this.albumList);
      })
  }
})
