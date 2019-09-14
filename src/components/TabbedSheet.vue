<template>
  <div
    class="TabbedSheet"
    v-bind:sheet="sheet"
  >
    <div
      class="Name"
    >
      {{sheet.name}}
    </div>
    <TabWrapper
      v-bind:tabs="sheet.tabs"
      v-bind:baseStats="sheet.baseStats"
      v-bind:constrainedStats="sheet.constrainedStats"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BaseStat, ConstrainedStat, TabbedSheet as TabbedSheetShape } from '../types';

import TabWrapper from './TabWrapper.vue';

@Component({
  components: {
    TabWrapper,
  },
  name: 'TabbedSheet',
})
export default class TabbedSheet extends Vue {
  @Prop() private baseStats!: BaseStat[];
  @Prop() private constrainedStats!: ConstrainedStat[];
  @Prop() private sheet!: TabbedSheetShape;
}
</script>

<style scoped>
.TabbedSheet {
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
