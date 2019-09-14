<template>
  <div id="app">
    <SheetSelector
      @update-selected="changeSheet"
      v-bind:selectedSheetId=selectedSheetId
      v-bind:sheets=sheets
    />
    <SingleSheet
      v-if="!isTabbedSheet()"
      v-bind:sheet=selectedSheet
    />
    <TabbedSheet
      v-if="isTabbedSheet()"
      v-bind:sheet=selectedSheet
    />
  </div>
</template>

<script lang="ts">
import {
  mapGetters,
  mapState,
  mapMutations,
} from 'vuex';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import SheetSelector from './components/SheetSelector.vue';
import SingleSheet from './components/SingleSheet.vue';
import TabbedSheet from './components/TabbedSheet.vue';

import {
  RootState,
  SingleSheet as SingleSheetShape,
  TabbedSheet as TabbedSheetShape,
} from './types';

@Component({
  components: {
    SheetSelector,
    SingleSheet,
    TabbedSheet,
  },
  computed: {
    ...mapState([
      'selectedSheetId',
      'sheets',
    ]),
    ...mapGetters([
      'selectedSheet',
    ]),
  },
  methods: {
    ...mapMutations([
      'changeSheet',
    ]),
  },
})
export default class App extends Vue {
  private selectedSheetId!: string;
  private sheets!: Extract<RootState, 'sheets'>;
  private selectedSheet!: SingleSheetShape | TabbedSheetShape;
  private isTabbedSheet () {
    if ((this.selectedSheet as TabbedSheetShape).tabs) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
