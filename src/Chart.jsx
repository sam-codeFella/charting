import { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
    const chartContainerRef = useRef(null);

    const dummyData = [
        { time: '2024-01-01', value: 30 },
        { time: '2024-01-02', value: 35 },
        { time: '2024-01-03', value: 33 },
        { time: '2024-01-04', value: 38 },
        { time: '2024-01-05', value: 36 },
        { time: '2024-01-06', value: 40 },
        { time: '2024-01-07', value: 39 }
    ];

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: 600,
            height: 300,
            layout: {
                background: { color: '#ffffff' },
                textColor: '#333333',
            },
            grid: {
                vertLines: { color: '#f0f0f0' },
                horzLines: { color: '#f0f0f0' },
            }
        });

        const areaSeries = chart.addAreaSeries({
            lineColor: '#2962FF',
            topColor: '#2962FF',
            bottomColor: 'rgba(41, 98, 255, 0.28)',
        });

        areaSeries.setData(dummyData);
        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, []);

    return <div ref={chartContainerRef} />;
};

export default Chart;
