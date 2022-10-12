import {ReactElement, useContext, useLayoutEffect, useRef, useState} from 'react';

import {nanoid} from 'nanoid';

import {PieChartContext} from '../../context/PieChartContext';
import {PieChartDataItem} from '../../types';
import {degreesToRadians} from '../../utils/degreesToRadians';

interface PieChartSectionTextProps {
  item: PieChartDataItem;
  sectionStartAngle: number;
  sectionEndAngle: number;
  level: number;
}

export function PieChartSectionText({
  item: {hideName, name},
  sectionStartAngle,
  sectionEndAngle,
  level,
}: PieChartSectionTextProps): ReactElement | null {
  const {arc, innerRadius, animationType, sectionWidth} = useContext(PieChartContext);
  const textRef = useRef<SVGTextElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [fontSize, setFontSize] = useState(sectionWidth / 2);
  const [startOffset, setStartOffset] = useState('0');

  const textRadius = innerRadius + sectionWidth / 2 + level * sectionWidth - fontSize / 2;
  const textPathId = `circlePath-${nanoid()}`;

  useLayoutEffect(() => {
    if (!textRef.current || !pathRef.current) {
      return;
    }

    let currentFontSize = fontSize;

    while (textRef.current.getComputedTextLength() > pathRef.current.getTotalLength() / 2 - 5) {
      currentFontSize = Number(currentFontSize) - 2;
      textRef.current.setAttribute('font-size', String(currentFontSize));
    }

    setFontSize(currentFontSize);
  }, []);

  useLayoutEffect(() => {
    if (!textRef.current || !pathRef.current) {
      return;
    }

    setStartOffset(
      String(Math.round((pathRef.current.getTotalLength() / 2 - textRef.current.getComputedTextLength()) / 2)),
    );
  }, [fontSize]);

  if (hideName) {
    return null;
  }

  return (
    <>
      <path
        id={textPathId}
        ref={pathRef}
        d={
          arc({
            innerRadius: textRadius,
            outerRadius: textRadius,
            startAngle: degreesToRadians(sectionStartAngle),
            endAngle: degreesToRadians(sectionEndAngle),
          })!
        }
      />

      <text fill="white" fontSize={fontSize} ref={textRef} opacity={animationType === 'roundAppear' ? 0 : 1}>
        <textPath xlinkHref={`#${textPathId}`} startOffset={startOffset}>
          {name}
        </textPath>

        {animationType === 'roundAppear' && (
          <animate attributeName="opacity" dur="0.5s" begin="0.3s" from={0} to={1} fill="freeze" />
        )}
      </text>
    </>
  );
}
