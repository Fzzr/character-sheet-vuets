<template>
  <div id="app">
    <EntitySelector
      @update-selected="changeCharacter"
      v-bind:selectedEntityId=selectedCharacterId
      v-bind:entities=characters
    />
    <EntitySelector
      @update-selected="changeSheet"
      v-bind:selectedEntityId=selectedSheetId
      v-bind:entities=sheets
    />
    <Sheet
      v-bind:sheet=selectedSheet
      v-bind:character=selectedCharacter
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

import EntitySelector from './components/EntitySelector.vue';
import Sheet from './components/Sheet.vue';

import {
  Character,
  RootState,
  SheetTemplate,
} from './types';

@Component({
  components: {
    EntitySelector,
    Sheet,
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'selectedSheetId',
      'characters',
      'sheets',
    ]),
    ...mapGetters([
      'selectedCharacter',
      'selectedSheet',
    ]),
  },
  methods: {
    ...mapMutations([
      'changeCharacter',
      'changeSheet',
    ]),
  },
})
export default class App extends Vue {
  private selectedCharacterId!: string;
  private selectedSheetId!: string;
  private characters!: Extract<RootState, 'characters'>;
  private sheets!: Extract<RootState, 'sheets'>;
  private selectedCharacter!: Character;
  private selectedSheet!: SheetTemplate;
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
