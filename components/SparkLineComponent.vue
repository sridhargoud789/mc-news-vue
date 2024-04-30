<template>
  <v-container fluid>
    <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="lines"
      :labels="labels"
      auto-draw
    ></v-sparkline>
  </v-container>
</template>

<script>
export default {
  name: 'SparkLineComponent',
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    changePercentage: {
      type: Number,
      default: 0,
    },
    colorGradient: {
      type: String,
      default: '#10C684',
    },
  },
  data() {
    return {
      fill: false,
      gradient: ['#10C684'],
      padding: 0,
      radius: 0,
      lines: [],
      labels: [],
      width: 2,
      color: '#10C684',
    }
  },
  created() {
    const red = '#ED5858';
    const green = '#10C684';
    this.lines = this.values.map(function (x) {
      return Number(x);
    });

    if ( this.changePercentage <= 0 ) {
      this.gradient[0] = red;
    } else {
      this.gradient[0] = green;
    }
    // TODO: Fix this
    /*
    if (this.color) {
      this.gradient[0] = this.color;
    } else if ( this.values[0] >= this.values[this.values.length - 1] ) {
        this.gradient[0] = red;
    } else {
      this.gradient[0] = green;
    }
    this.fill = false;
    */
  },
}
</script>
