import { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

const App = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = [
                    {
                        time: '2024-02-19',
                        open: 100.0,
                        high: 105.0,
                        low: 98.0,
                        close: 102.0
                    }
                ];
                setMarketData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // Set up interval for real-time updates
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            <h1>Market Chart</h1>
            <ChartComponent data={marketData} />
        </div>
    );
};

export default App;
