<template>
  <div
    class="Sheet"
    v-bind:character="character"
    v-bind:sheet="sheet"
  >
    <div
      class="Name"
    >
      {{sheet.name}}
    </div>
    <div
      v-if="sheet.sections"
    >
      <StatSection
        v-for="(section) in sheet.sections"
        :key="section.id"
        v-bind:stats="character.stats"
        v-bind:section="section"
      />
    </div>
    <div
      v-if="sheet.tabs"
    >
      <TabWrapper
        v-bind:tabs="sheet.tabs"
        v-bind:character="character"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character, SheetTemplate } from '../types';

import StatSection from './StatSection.vue';
import TabWrapper from './TabWrapper.vue';

@Component({
  components: {
    StatSection,
    TabWrapper,
  },
  name: 'Sheet',
})
export default class Sheet extends Vue {
  @Prop() private character!: Character;
  @Prop() private sheet!: SheetTemplate;
}
</script>

<style scoped>
.Sheet {
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
