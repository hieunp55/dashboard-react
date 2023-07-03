import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip}
from'@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const PieChart = () => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id='Pie-Chart'
      height='420px'
      legendSettings={{visible: true, background: 'white'}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name='Sale'
          dataSource={pieChartData}
          xName='x'
          yName='y'
          innerRadius='40%'
          startAngle={0}
          endAngle={360}
          radius='70%'
          explode
          explodeOffset='10%'
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff'
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;