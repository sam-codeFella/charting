import { useRef, useEffect } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartRef.current, {
            width: 600,
            height: 400,
            layout: {
                background: { color: '#ffffff' },
                textColor: '#333',
            },
            grid: {
                vertLines: { color: '#f0f0f0' },
                horzLines: { color: '#f0f0f0' },
            },
        });

        // Use the new addSeries method with CandlestickSeries
        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: false,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350'
        });

        candlestickSeries.setData(data);

        // Cleanup
        return () => {
            chart.remove();
        };
    }, [data]);

    return <div ref={chartRef} />;
};

export default ChartComponent

