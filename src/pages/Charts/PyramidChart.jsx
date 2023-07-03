import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection }
from'@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const PyramidChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pyramid" />
      <div className="w-full">
        <AccumulationChartComponent
          id='Pyramid-Chart'
          height='420px'
          legendSettings={{visible: true, background: 'white'}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
        >
          <Inject services={[PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Calorage'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default PyramidChart;