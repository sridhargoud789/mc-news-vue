<template>
  <div
    v-if="loading"
    class="container"
    >
    <div class="row">
      <div class="col-12">
        <div class="trending--list">
          <h2 class="trending--list__title">Trending topics</h2>
          <div v-for="topic in topics" :key="topic.id">
            <span>| </span
            ><a class="trending--list__link" :href="topic.url">{{
              topic.name
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TrendingTopicsService } from '../services/trending.topics.service';
export default {
  name: 'TrendingTopicsComponent',
  data() {
    return {
      topics: [],
      loading: true,
    }
  },
  async created() {
    const topicsService = new TrendingTopicsService( this.$apiNebolus );
    const fetchTopicsData = async () => {
      const topics = await topicsService.getListTrendingTopics();
      return topics;
    }
    this.topics = await fetchTopicsData();
    this.loading = true;
    this.$nuxt.$emit( "section", "topics" );
  },
}
</script>
