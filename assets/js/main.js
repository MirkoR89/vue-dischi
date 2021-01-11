const app = new Vue({
  el: '#app',
  data: {
    albumList: []
  },
  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(resp => {
      console.log(resp.data.response);
      albumApi = resp.data.response;
      this.albumList.push(albumApi)
    })
  }
})
