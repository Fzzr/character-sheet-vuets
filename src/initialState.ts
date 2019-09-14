import { RootState } from './types';

const initialState: RootState = {
  selectedSheetId: 'single-sheet-0',
  sheets:
  [
    {
      id: 'single-sheet-0',
      name: 'Split by Constrained/Base - Single',
      baseStats:
      [
        {
          id: 'strength',
          name: 'Strength',
          value: 10,
        },
        {
          id: 'dexterity',
          name: 'Dexterity',
          value: 12,
        },
      ],
      constrainedStats:
      [
        {
          id: 'hp',
          name: 'HP',
          value: 20,
          maxValue: 20,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 5,
          maxValue: 0,
        },
      ],
      sections: [
        {
          baseStats: [],
          constrainedStats:
          [
            'hp',
            'initiative',
          ],
          name: 'Constrained',
        },
        {
          baseStats: [
            'strength',
            'dexterity',
          ],
          constrainedStats: [],
          name: 'Base',
        },
      ],
    },
    {
      id: 'single-sheet-1',
      name: 'Split By Offense/Defense - Single',
      baseStats:
      [
        {
          id: 'strength',
          name: 'Strength',
          value: 14,
        },
        {
          id: 'dexterity',
          name: 'Dexterity',
          value: 12,
        },
      ],
      constrainedStats:
      [
        {
          id: 'hp',
          name: 'HP',
          value: 30,
          maxValue: 90,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 0,
          maxValue: 10,
        },
      ],
      sections:
      [
        {
          baseStats:
          [
            'strength',
          ],
          constrainedStats:
          [
            'hp',
          ],
          name: 'Offense',
        },
        {
          baseStats:
          [
            'dexterity',
          ],
          constrainedStats:
          [
            'initiative',
          ],
          name: 'Defense',
        },
      ],
    },
    {
      id: 'tabbed-sheet-0',
      name: 'Split by Constrained/Base - Tabbed',
      baseStats:
      [
        {
          id: 'strength',
          name: 'Strength',
          value: 12,
        },
        {
          id: 'dexterity',
          name: 'Dexterity',
          value: 10,
        },
      ],
      constrainedStats:
      [
        {
          id: 'hp',
          name: 'HP',
          value: 50,
          maxValue: 100,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 55,
          maxValue: 55,
        },
      ],
      tabs:
      [
        {
          id: 'constrained',
          name: 'Constrained Stats',
          sections: [
            {
              baseStats: [],
              constrainedStats:
              [
                'hp',
                'initiative',
              ],
              name: 'Constrained',
            },
          ],
        },
        {
          id: 'base',
          name: 'Base Stats',
          sections: [
            {
              baseStats: [
                'strength',
                'dexterity',
              ],
              constrainedStats: [],
              name: 'Base',
            },
          ],
        },
      ],
    },
    {
      id: 'tabbed-sheet-1',
      name: 'Split By Offense/Defense - Tabbed',
      baseStats:
      [
        {
          id: 'strength',
          name: 'Strength',
          value: 12,
        },
        {
          id: 'dexterity',
          name: 'Dexterity',
          value: 10,
        },
      ],
      constrainedStats:
      [
        {
          id: 'hp',
          name: 'HP',
          value: 20,
          maxValue: 20,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 5,
          maxValue: 6,
        },
      ],
      tabs:
      [
        {
          id: 'physical',
          name: 'Offense Stats',
          sections: [
            {
              baseStats:
              [
                'strength',
              ],
              constrainedStats:
              [
                'hp',
              ],
              name: 'Offense',
            },
          ],
        },
        {
          id: 'mental',
          name: 'Defense Stats',
          sections: [
            {
              baseStats:
              [
                'dexterity',
              ],
              constrainedStats:
              [
                'initiative',
              ],
              name: 'Defense',
            },
          ],
        },
      ],
    },
  ],
};

export default initialState;
