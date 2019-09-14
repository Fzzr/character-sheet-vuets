<template>
  <div
    class="StatBox"
    v-bind:stat="stat"
  >
    <span>
      {{stat.name}}:
      <input
        type="number"
        v-bind:value="stat.value"
        />
    </span>
    <span
      v-if="isConstrained()"
    >
      /{{stat.maxValue}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { BaseStat, ConstrainedStat } from '../types';

@Component({
  name: 'StatBox',
})
export default class StatBox extends Vue {
  @Prop() private stat!: BaseStat;

  private isConstrained (): boolean {
    if (typeof (this.stat as ConstrainedStat).maxValue === 'number') {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style scoped>
.StatBox {
  flex: none;
  border: 1px solid black;
  margin: .2em;
  padding: .1em .2em;
}

.StatContent {
  display: none;
}

input {
  width: 3em;
}

</style>
