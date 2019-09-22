export interface Entity {
  readonly id: string;
  name: string;
}

export interface BaseStat extends Entity {
  value: number;
}

export interface ConstrainedStat extends BaseStat {
  maxValue: number;
}

export type Stat = BaseStat | ConstrainedStat;

export interface Character extends Entity {
  stats: Stat[];
}

export interface Section extends Entity {
  statIds: string[];
}

export interface Tab extends Entity {
  sections: Section[];
}

export interface BaseSheet {
  id: string;
  name: string;
  baseStats: BaseStat[];
  constrainedStats: ConstrainedStat[];
}

export interface SingleSheet extends BaseSheet {
  sections: Section[];
}

export interface TabbedSheet extends BaseSheet {
  tabs: Tab[];
}

export interface RootState {
  selectedSheetId: string;
  sheets: Array<SingleSheet | TabbedSheet>;
}
