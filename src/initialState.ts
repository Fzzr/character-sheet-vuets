import { RootState } from './types';

const initialState: RootState = {
  selectedCharacterId: 'stronk',
  selectedSheetId: 'sections-only',
  characters:
  [
    {
      id: 'stronk',
      name: 'Stronk',
      stats:
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
        {
          id: 'hp',
          name: 'HP',
          value: 20,
          maxValue: 20,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 2,
          maxValue: 10,
        },
      ],
    },
    {
      id: 'weak',
      name: 'Weak',
      stats:
      [
        {
          id: 'strength',
          name: 'Strength',
          value: 4,
        },
        {
          id: 'dexterity',
          name: 'Dexterity',
          value: 6,
        },
        {
          id: 'hp',
          name: 'HP',
          value: 10,
          maxValue: 10,
        },
        {
          id: 'initiative',
          name: 'Initiative',
          value: 1,
          maxValue: 2,
        },
      ],
    },
  ],
  sheets:
  [
    {
      id: 'sections-only',
      name: 'Sections Only Sheet',
      sections: [
        {
          id: 'constrained-secton',
          statIds:
          [
            'hp',
            'initiative',
          ],
          name: 'Constrained Section',
        },
        {
          id: 'base-section',
          statIds:
          [
            'strength',
            'dexterity',
          ],
          name: 'Base Section',
        },
      ],
    },
    {
      id: 'tabs-only',
      name: 'Tabs Only Sheet',
      tabs:
      [
        {
          id: 'one-section',
          name: 'One Section Tab',
          sections:
          [
            {
              id: 'only-section',
              name: 'Only Section',
              statIds:
              [
                'strength',
                'dexterity',
              ],
            },
          ],
        },
        {
          id: 'two-sections',
          name: 'Two Section Tab',
          sections:
          [
            {
              id: 'hp-section',
              name: 'HP Section',
              statIds:
              [
                'hp',
              ],
            },
            {
              id: 'initiative-section',
              name: 'Initiative Section',
              statIds:
              [
                'initiative',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sections-and-tabs',
      name: 'Sections and Tabs Sheet',
      sections:
      [
        {
          id: 'hp-section',
          name: 'HP Section',
          statIds:
          [
            'hp',
          ],
        },
        {
          id: 'initiative-section',
          name: 'Initiative Section',
          statIds:
          [
            'initiative',
          ],
        },
      ],
      tabs:
      [
        {
          id: 'strength-tab',
          name: 'Strength Tab',
          sections:
          [
            {
              id: 'strength-section',
              name: 'Strength Section',
              statIds:
              [
                'strength',
              ],
            },
          ],
        },
        {
          id: 'dexterity-tab',
          name: 'Dexterity Tab',
          sections:
          [
            {
              id: 'dexterity-section',
              name: 'Dexterity Section',
              statIds:
              [
                'dexterity',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default initialState;
