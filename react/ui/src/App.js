import { useEffect, useState } from 'react';
import { fetchBasicApp1Information, fetchBasicApp2Information } from './api';

function App() {
  const [app1Info, setApp1Info] = useState('');
  const [app2Info, setApp2Info] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setApp1Info((await fetchBasicApp1Information()).data);
        setApp2Info((await fetchBasicApp2Information()).data);
      } catch (error) {
        console.error('Error fetching app information:', error);
      }
    };

    fetchData();
  }, [])
  
  return (
    <div>
      Endpoint response <br/>
      {app1Info} <br/>{app2Info}
    </div>
  );
}

export default App;
