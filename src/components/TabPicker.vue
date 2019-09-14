<template>
  <div
    class="TabPicker"
    v-bind:class="{ Selected: selected }"
    v-bind:index="index"
    v-bind:selected="selected"
    v-bind:title="title"
    @click="selectTab"
  >
    {{title}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'TabPicker',
})
export default class TabPicker extends Vue {
  @Prop() private index!: number;
  @Prop() private selected!: boolean;
  @Prop() private title!: string;

  @Emit()
  private selectTab () {
    return this.index;
  }
}
</script>

<style scoped>
.TabPicker {
  border: 1px solid black;
  margin-right: 1px;
  padding: .1em;
}

.Selected {
  border-bottom: 0px;
}
</style>
