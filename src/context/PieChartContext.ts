import {createContext} from 'react';

import {Arc, DefaultArcObject} from 'd3-shape';

import {PieChartProps} from '../types';

export const PieChartContext = createContext<
  | Required<Pick<PieChartProps, 'outerRadius' | 'innerRadius' | 'cornerRadius'>> &
      Partial<Pick<PieChartProps, 'animationType' | 'onMouseEnter' | 'onMouseLeave'>> & {
        arc: Arc<any, DefaultArcObject>;
        sectionWidth: number;
      }
>(null!);
