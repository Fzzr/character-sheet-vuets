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

export interface SheetTemplate extends Entity {
  sections?: Section[];
  tabs?: Tab[];
}

export interface RootState {
  selectedCharacterId: string;
  selectedSheetId: string;
  characters: Character[];
  sheets: SheetTemplate[];
}
