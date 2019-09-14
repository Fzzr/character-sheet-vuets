<template>
  <div
    class="StatsSection"
    v-bind:baseStats="baseStats"
    v-bind:constrainedStats="constrainedStats"
    v-bind:section="section"
  >
    <span>{{section.name}}</span>
    <StatBox
      v-for="statId in section.constrainedStats"
      :key="statId"
      v-bind:stat="findStat(statId, constrainedStats)"
    />
    <StatBox
      v-for="statId in section.baseStats"
      :key="statId"
      v-bind:stat="findStat(statId, baseStats)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import StatBox from './StatBox.vue';

import { BaseStat, ConstrainedStat, Section } from '../types';

@Component({
  components: {
    StatBox,
  },
  name: 'StatsSection',
})
export default class StatsSection extends Vue {
  @Prop() private baseStats!: BaseStat[];
  @Prop() private constrainedStats!: ConstrainedStat[];
  @Prop() private section!: Section;

  private findStat (statId: string, statList: BaseStat[]): BaseStat {
    const emptyStat: BaseStat = {
      id: '',
      name: '',
      value: 0,
    };

    let stat: BaseStat | undefined = statList.find((checkStat) => {
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
