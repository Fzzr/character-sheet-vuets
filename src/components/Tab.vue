<template>
  <div
    class="Tab"
    v-bind:class="{ Selected: selected }"
    v-bind:tab="tab"
    v-bind:character="character"
  >
    <div
      class="Name"
    >
      {{tab.name}}
    </div>
    <StatSection
      v-for="(section, index) in tab.sections"
      :key="index"
      v-bind:stats="character.stats"
      v-bind:section="section"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import StatSection from './StatSection.vue';

import { Character, Tab as TabShape } from '../types';

@Component({
  components: {
    StatSection,
  },
  name: 'Tab',
})
export default class Tab extends Vue {
  @Prop() private character!: Character;
  @Prop() private selected!: boolean;
  @Prop() private tab!: TabShape;
}
</script>

<style scoped>
.Tab {
  padding: 1em;
  display: none;
  border: 1px solid black;
  flex: auto;
}

.Name {
  flex: initial;
  align-self: center;
}

.Selected {
  display: block;
}
</style>
