import Vue from 'vue';
import Vuex, { GetterTree, StoreOptions } from 'vuex';

import {
  BaseSheet,
  RootState,
  SingleSheet,
  TabbedSheet,
} from './types';

import initialState from './initialState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: initialState,
  getters: {
    selectedSheet: (state: RootState): SingleSheet | TabbedSheet | undefined => {
      const selectedSheet = state.sheets.find((sheet: BaseSheet) => {
        return sheet.id === state.selectedSheetId;
      });
      return selectedSheet;
    },
  },
  mutations: {
    changeSheet (state, payload: string) {
      const selectedSheetId = payload;
      state.selectedSheetId = selectedSheetId;
    },
  },
};

export default new Vuex.Store<RootState>(store);
