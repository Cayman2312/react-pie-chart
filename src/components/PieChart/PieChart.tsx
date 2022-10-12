import {ReactElement, useMemo} from 'react';

import {arc} from 'd3-shape';

import {PieChartContext} from '../../context/PieChartContext';
import {PieChartDataItem, PieChartProps} from '../../types';
import {PieChartSection} from '../PieChartSection/PieChartSection';

import s from './PieChart.module.css';

export function PieChart({
  data,
  outerRadius = 300,
  innerRadius = 50,
  cornerRadius = 6,
  ...rest
}: PieChartProps): ReactElement {
  const depth = useMemo<number>(() => {
    let depth = 0;

    const checkCurrentData = (previousDepth: number) => (item: PieChartDataItem) => {
      if (!item.children) {
        if (previousDepth > depth) {
          depth = previousDepth;
        }

        return;
      }

      item.children.forEach(checkCurrentData(previousDepth + 1));
    };

    data.forEach(checkCurrentData(1));

    return depth;
  }, [data]);

  return (
    <PieChartContext.Provider
      value={{
        arc: arc(),
        sectionWidth: (outerRadius - innerRadius) / depth,
        outerRadius,
        innerRadius,
        cornerRadius,
        ...rest,
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${outerRadius * 2} ${outerRadius * 2}`}
        className={s.PieChart}
      >
        {data.map((item, index, items) => (
          <PieChartSection
            key={index}
            level={0}
            item={item}
            items={items}
            index={index}
            parentAngle={360}
            parentAngleOffset={0}
          />
        ))}
      </svg>
    </PieChartContext.Provider>
  );
}
