<template>
  <div
    class="SingleSheet"
    v-bind:sheet="sheet"
  >
    <div
      class="Name"
    >
      {{sheet.name}}
    </div>
    <StatSection
      v-for="(section, index) in sheet.sections"
      :key="index"
      v-bind:baseStats="sheet.baseStats"
      v-bind:constrainedStats="sheet.constrainedStats"
      v-bind:section="section"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SingleSheet as SingleSheetShape } from '../types';

import StatSection from './StatSection.vue';

@Component({
  components: {
    StatSection,
  },
  name: 'SingleSheet',
})
export default class SingleSheet extends Vue {
  @Prop() private sheet!: SingleSheetShape;
}
</script>

<style scoped>
.SingleSheet {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid darkgray;
  padding: 1em;
  margin: 0% 10%;
}

.Name {
  flex: initial;
  align-self: center;
}
</style>
