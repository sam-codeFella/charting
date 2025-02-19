import { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

const App = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        const fetchFinancialData = async () => {

            try {
                const response = await fetch(`http://localhost:5001/fetch-financials/769d1884-2b71-455e-8b22-f90bcc71206d`);
                if (!response.ok) {
                    throw new Error('Failed to fetch financial data');
                }
                const result = await response.json();
                setMarketData(result);
                //setFinancialData(result);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
            }
        };

        const fetchData = async () => {
            try {
                // now call the api from here.
                const response = await fetch('https://mayank-29417dca18e6.herokuapp.com/fetch-all-companies');
                //
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

        //fetchData();
        fetchFinancialData()
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
