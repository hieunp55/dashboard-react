import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { rangeColorMapping, colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const ColorMappingChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mapping" />
      <div className="w-full">
        <ChartComponent
          id='Bar-Chart'
          title='Olympic Medals'
          height='420px'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
        >
          <Inject services={[ColumnSeries, Legend, Category, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
           <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMappingChart