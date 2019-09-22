import Vue from 'vue';
import Vuex, { GetterTree, StoreOptions } from 'vuex';

import {
  Character,
  RootState,
  SheetTemplate,
} from './types';

import initialState from './initialState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: initialState,
  getters: {
    selectedCharacter: (state: RootState): Character | undefined => {
      const selectedCharacter = state.characters.find((character: Character) => {
        return character.id === state.selectedCharacterId;
      });
      return selectedCharacter;
    },
    selectedSheet: (state: RootState): SheetTemplate | undefined => {
      const selectedSheet = state.sheets.find((sheet: SheetTemplate) => {
        return sheet.id === state.selectedSheetId;
      });
      return selectedSheet;
    },
  },
  mutations: {
    changeCharacter (state, payload: string) {
      const selectedCharacterId = payload;
      state.selectedCharacterId = selectedCharacterId;
    },
    changeSheet (state, payload: string) {
      const selectedSheetId = payload;
      state.selectedSheetId = selectedSheetId;
    },
  },
};

export default new Vuex.Store<RootState>(store);
