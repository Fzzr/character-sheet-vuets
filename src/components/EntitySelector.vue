<template>
  <select
    :value="selectedEntityId"
    @change="updateSelected"
  >
    <option
      v-for="entity in entities"
      :key="entity.id"
      v-bind:value="entity.id"
    >
      {{entity.name}}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import { Entity } from '../types';

@Component({
  name: 'EntitySelector',
})
export default class SheetSelector extends Vue {
  @Prop() private selectedEntityId!: string;
  @Prop() private entities!: Entity[];

  @Emit()
  private updateSelected (event: Event) {
    const target = event.target as HTMLSelectElement;
    return target.value;
  }
}
</script>
