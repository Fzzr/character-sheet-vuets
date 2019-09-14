<template>
  <div
    class="TabsWrapper"
    v-bind:tabs="tabs"
  >
    <div class="TabPickerWrapper">
      <TabPicker
        @select-tab="changeSelectedTab"
        class="TabPicker"
        v-for="(tab, index) in tabs"
        v-bind:title="tab.name"
        v-bind:selected="index === selectedTab"
        v-bind:index="index"
        :key="tab.name"
      />
    </div>
    <Tab
      v-for="(tab, index) in tabs"
      v-bind:baseStats="baseStats"
      v-bind:constrainedStats="constrainedStats"
      v-bind:selected="index === selectedTab"
      v-bind:tab="tab"
      :key="tab.name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  BaseStat,
  ConstrainedStat,
  Tab as TabShape,
} from '../types';

import Tab from './Tab.vue';
import TabPicker from './TabPicker.vue';

@Component({
  components: {
    Tab,
    TabPicker,
  },
  name: 'TabWrapper',
})
export default class TabWrapper extends Vue {
  @Prop() private baseStats!: BaseStat[];
  @Prop() private constrainedStats!: ConstrainedStat[];
  @Prop() private tabs!: TabShape;

  private selectedTab = 0;

  private changeSelectedTab (index: number): void {
    this.selectedTab = index;
  }
}
</script>

<style scoped>
.TabsWrapper {
  border: 1px solid black;
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: .2em;
}

.TabPickerWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
