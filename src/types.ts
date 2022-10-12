export interface PieChartDataItem {
  percentage: number;
  name: string;
  color: string;
  hideName?: boolean;
  children?: PieChartDataItem[];
}

export interface PieChartProps {
  data: PieChartDataItem[];
  innerRadius?: number;
  outerRadius?: number;
  cornerRadius?: number;
  onMouseEnter?: (item: PieChartDataItem) => void;
  onMouseLeave?: (item: PieChartDataItem) => void;
  animationType?: 'roundAppear';
}
