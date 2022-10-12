import {PieChart} from './components/PieChart/PieChart';
import {DATA1, DATA2, DATA3} from './constants';

import s from './App.module.css';

function App() {
  return (
    <div className={s.Wrapper}>
      <div className={s.PieChartWrapper}>
        <PieChart data={DATA1} animationType="roundAppear" />
      </div>
      <div className={s.PieChartWrapper}>
        <PieChart data={DATA2} />
      </div>
      <div className={s.PieChartWrapper}>
        <PieChart data={DATA3} animationType="roundAppear" />
      </div>
    </div>
  );
}

export default App;
