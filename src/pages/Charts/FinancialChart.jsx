import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, DateTime, Logarithmic, Tooltip, Crosshair, Zoom } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const FinancialChart = () => {
  const { currentMode } = useStateContext();
  const date1 = new Date('2017, 1, 1');

  // eslint-disable-next-line consistent-return
  function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Finacial AAPLE History" />
      <div className="w-full">
        <ChartComponent
          id='Hilo-Chart'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true, shared: true}}
          crosshair={{ enable: true, lineType: 'Vertical', line: {width: 0} }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name="Apple Inc"
              type='Hilo'
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default FinancialChart;