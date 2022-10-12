import {ReactElement, useContext} from 'react';

import {PieChartContext} from '../../context/PieChartContext';
import {PieChartDataItem} from '../../types';
import {degreesToRadians} from '../../utils/degreesToRadians';

interface PieChartSectionArcProps {
  item: PieChartDataItem;
  sectionStartAngle: number;
  sectionEndAngle: number;
  currentSectionAngle: number;
  level: number;
}

export function PieChartSectionArc({
  item: {color},
  sectionStartAngle,
  sectionEndAngle,
  level,
  currentSectionAngle,
}: PieChartSectionArcProps): ReactElement {
  const {arc, innerRadius, sectionWidth, cornerRadius, animationType} = useContext(PieChartContext);

  const sectionInnerRadius = innerRadius + level * sectionWidth;
  const sectionOuterRadius = sectionInnerRadius + sectionWidth;

  return (
    <path
      fill={color}
      stroke="#ffffff"
      strokeWidth="1"
      d={
        arc.cornerRadius(cornerRadius)({
          innerRadius: sectionInnerRadius,
          outerRadius: sectionOuterRadius,
          startAngle: degreesToRadians(sectionStartAngle),
          endAngle: degreesToRadians(sectionEndAngle),
        })!
      }
    >
      {animationType === 'roundAppear' && (
        <animate
          attributeName="d"
          dur="0.5s"
          from={
            arc.cornerRadius(cornerRadius)({
              innerRadius: sectionInnerRadius,
              outerRadius: sectionOuterRadius,
              startAngle: degreesToRadians(sectionStartAngle + currentSectionAngle * 0.2),
              endAngle: degreesToRadians(sectionEndAngle - currentSectionAngle * 0.2),
            })!
          }
          to={
            arc.cornerRadius(cornerRadius)({
              innerRadius: sectionInnerRadius,
              outerRadius: sectionOuterRadius,
              startAngle: degreesToRadians(sectionStartAngle),
              endAngle: degreesToRadians(sectionEndAngle),
            })!
          }
        />
      )}
    </path>
  );
}
