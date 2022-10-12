import {useContext} from 'react';

import {PieChartContext} from '../../context/PieChartContext';
import {PieChartDataItem} from '../../types';
import {PieChartSectionArc} from '../PieChartSectionArc/PieChartSectionArc';
import {PieChartSectionText} from '../PieChartSectionText/PieChartSectionText';

interface PieChartSectionProps {
  items: PieChartDataItem[];
  item: PieChartDataItem;
  index: number;
  level: number;
  parentAngle: number;
  parentAngleOffset: number;
}

export function PieChartSection({items, item, index, level, parentAngle, parentAngleOffset}: PieChartSectionProps) {
  const {onMouseEnter, onMouseLeave, outerRadius} = useContext(PieChartContext);

  const {children, percentage} = item;

  const sectionStartAngle = items.reduce<number>((acc, curItem, curIndex) => {
    if (curIndex >= index) {
      return acc;
    }

    return acc + (curItem.percentage / 100) * parentAngle;
  }, parentAngleOffset);
  const currentSectionAngle = (percentage / 100) * parentAngle;
  const sectionEndAngle = sectionStartAngle + currentSectionAngle;

  return (
    <g>
      {children && (
        <g>
          {children.map((childItem, childIndex) => (
            <PieChartSection
              item={childItem}
              items={children}
              index={childIndex}
              key={childIndex}
              level={level + 1}
              parentAngle={currentSectionAngle}
              parentAngleOffset={sectionStartAngle}
            />
          ))}
        </g>
      )}

      <g
        style={{transform: `translate(${outerRadius}px, ${outerRadius}px)`}}
        onMouseEnter={typeof onMouseEnter === 'function' ? onMouseEnter.bind(null, item) : undefined}
        onMouseLeave={typeof onMouseLeave === 'function' ? onMouseLeave.bind(null, item) : undefined}
      >
        <PieChartSectionArc
          item={item}
          sectionStartAngle={sectionStartAngle}
          sectionEndAngle={sectionEndAngle}
          currentSectionAngle={currentSectionAngle}
          level={level}
        />

        <PieChartSectionText
          item={item}
          level={level}
          sectionStartAngle={sectionStartAngle}
          sectionEndAngle={sectionEndAngle}
        />
      </g>
    </g>
  );
}
