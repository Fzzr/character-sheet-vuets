<template>
  <select
    :value="selectedSheetId"
    @change="updateSelected"
  >
    <option
      v-for="sheet in sheets"
      :key="sheet.id"
      v-bind:value="sheet.id"
    >
      {{sheet.name}}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import { RootState } from '../types';

@Component({
  name: 'SheetSelector',
})
export default class SheetSelector extends Vue {
  @Prop() private selectedSheetId!: string;
  @Prop() private sheets!: Extract<RootState, 'sheets'>;

  @Emit()
  private updateSelected (event: Event) {
    const target = event.target as HTMLSelectElement;
    return target.value;
  }
}
</script>
