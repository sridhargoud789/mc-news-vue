<template>
  <div style="max-width:800px; margin:auto">
    <div v-for="(item, index) of items" :key="index" style="background:cornflowerblue; color:#eee; border:1px solid #CCC; padding: 1.5rem; margin:.5rem 0; border-radius: 10px;">
      <div class="py-2">{{ item.title }}</div>
    </div>

    <infinite-loading v-if="items.length" spinner="bubbles" @infinite="infiniteScroll"></infinite-loading>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Posts",
  layout: 'largeWidth',
  data() {
    return {
      items: [],
      page: 1
    };
  },
  computed: {
    url() {
      return "https://jsonplaceholder.typicode.com/photos?_page=" + this.page;
    }
  },
  created() {
    this.getPhotos();
  },

  methods: {
    async getPhotos() {
      const resp = await axios.get(this.url);
      this.items = resp.data;
      //console.log(this.items)
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++; // next page
        axios.get(this.url).then(resp => {
                if (resp.data.length > 1) { // check if any left
                  resp.data.forEach(item => this.items.push(item)); // push it into the items array so we can display the data
                  $state.loaded();
                } else {
                  $state.complete();
                }
          })
          .catch(err => {
            console.log(err);
          });
      }, 500);
    }
  }
};
</script>