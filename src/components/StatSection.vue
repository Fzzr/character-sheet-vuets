<template>
  <div
    class="StatsSection"
    v-bind:section="section"
    v-bind:stats="stats"
  >
    <span>{{section.name}}</span>
    <StatBox
      v-for="statId in section.statIds"
      :key="statId"
      v-bind:stat="findStat(statId, stats)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import StatBox from './StatBox.vue';

import { Section, Stat } from '../types';

@Component({
  components: {
    StatBox,
  },
  name: 'StatsSection',
})
export default class StatsSection extends Vue {
  @Prop() private section!: Section;
  @Prop() private stats!: Stat[];

  private findStat (statId: string, statList: Stat[]): Stat {
    const emptyStat: Stat = {
      id: '',
      name: '',
      value: 0,
    };

    let stat: Stat | undefined = statList.find((checkStat) => {
      return checkStat.id === statId;
    });

    if (!stat) {
      stat = emptyStat;
    }
    return stat;
  }
}
</script>

<style scoped>
.StatsSection {
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: flex-start;
}
</style>
