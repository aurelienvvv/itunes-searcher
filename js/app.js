Vue.component("title-top", {
  data() {
    return {
      line1: "Find",
      line2: "something",
      line3: "on iTunes."
    };
  },
  template: `<h1 class="title">
    <span class="line1">{{line1}}</span><br />
    <span class="line2">{{line2}}</span><br />
    <span class="line2">{{line3}}</span>
  </h1>`
});

new Vue({
  el: "#wrapper",
  data() {
    return {
      searchs: "",
      result: []
    };
  },
  computed: {
    checkForm: function() {
      return (
        axios
          .get(`https://itunes.apple.com/search?term=${this.searchs}&limit=20`)
          .then(response => (this.result = response.data.results))
          .catch(error => console.log(error)),
        console.log(searchs)
      );
    }
  }
});
