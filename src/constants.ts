import {PieChartDataItem} from './types';

export const DATA1: PieChartDataItem[] = [
  {
    percentage: 30,
    name: 'Communication skills',
    color: '#357999',
    children: [
      {percentage: 30, name: 'Honesty', color: '#50add8'},
      {percentage: 70, name: 'Loyalty', color: '#50add8'},
    ],
  },
  {
    percentage: 20,
    name: 'Dependability',
    color: '#8947ad',
    children: [{percentage: 100, name: 'Teamwork', color: '#bf74e8'}],
  },
  {
    percentage: 35,
    name: 'Flexibility',
    color: '#2a965a',
    children: [
      {percentage: 40, name: 'Self-reliance', color: '#5aad7f'},
      {percentage: 60, name: 'Eagerness to learn', color: '#5aad7f'},
    ],
  },
  {
    percentage: 15,
    name: 'Confidence',
    color: '#5aadad',
    children: [{percentage: 100, name: 'Determination', color: '#83d3d3'}],
  },
];

export const DATA2: PieChartDataItem[] = [
  {
    percentage: 30,
    name: 'level_1',
    color: '#357999',
    children: [
      {
        percentage: 30,
        name: 'level_2',
        color: '#50add8',
        children: [
          {percentage: 40, name: 'level_3', color: '#bcee44'},
          {percentage: 60, name: 'level_3', color: '#bcee44'},
        ],
      },
      {
        percentage: 70,
        name: 'level_2',
        color: '#50add8',
        children: [
          {percentage: 40, name: 'level_3', color: '#bcee44'},
          {percentage: 60, name: 'level_3', color: '#bcee44'},
        ],
      },
    ],
  },
  {
    percentage: 20,
    name: 'level_1',
    color: '#8947ad',
    children: [{percentage: 100, name: 'level_2', color: '#bf74e8'}],
  },
  {
    percentage: 35,
    name: 'level_1',
    color: '#2a965a',
    children: [
      {
        percentage: 40,
        name: 'level_2',
        color: '#5aad7f',
      },
      {
        percentage: 60,
        name: 'level_2',
        color: '#5aad7f',
        children: [{percentage: 100, name: 'level_3', color: '#bcee44'}],
      },
    ],
  },
  {
    percentage: 15,
    name: 'level_1',
    color: '#5aadad',
    children: [{percentage: 100, name: 'level_2', color: '#83d3d3'}],
  },
];

export const DATA3: PieChartDataItem[] = [
  {
    percentage: 30,
    name: 'level_1',
    color: '#357999',
    children: [
      {
        percentage: 30,
        name: 'level_2',
        color: '#50add8',
        children: [
          {percentage: 40, name: 'level_3', color: '#bcee44', hideName: true},
          {percentage: 60, name: 'level_3', color: '#bcee44'},
        ],
      },
      {
        percentage: 70,
        name: 'level_2',
        color: '#50add8',
        children: [
          {percentage: 40, name: 'level_3', color: '#bcee44'},
          {percentage: 60, name: 'level_3', color: '#bcee44'},
        ],
      },
    ],
  },
  {
    percentage: 20,
    name: 'level_1',
    color: '#8947ad',
    children: [{percentage: 100, name: 'level_2', color: '#bf74e8'}],
  },
  {
    percentage: 35,
    name: 'level_1',
    color: '#2a965a',
    children: [
      {
        percentage: 40,
        name: 'level_2',
        color: '#5aad7f',
      },
      {
        percentage: 60,
        name: 'level_2',
        color: '#5aad7f',
        children: [
          {
            percentage: 100,
            name: 'level_3',
            color: '#bcee44',
            children: [{percentage: 50, name: 'level_4', color: 'orange'}],
          },
        ],
      },
    ],
  },
  {
    percentage: 15,
    name: 'level_1',
    color: '#5aadad',
    children: [{percentage: 100, name: 'level_2', color: '#83d3d3'}],
  },
];
