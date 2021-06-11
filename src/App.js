import React, { useEffect, useState } from 'react';
import axiosInstance from './config/axios'
import Template from './components/Template';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  const [pageForm, setPageForm] = useState(true);
  const [results, setResults] = useState({
    quotation: 0,
    typeBuy: "money",
    price: 0,
    tax: 0
  })
  
  useEffect(() => {
      async function getData(){
          const result = await axiosInstance.get('json/last/USD-BRL');
          setResults(results => ({...results, quotation: result.data.USDBRL.bid.replaceAll('.', ',')}))
      }
      getData();
  }, []);

  return (
    <Template>
      {pageForm ? (
        <Form setPageForm={setPageForm} results={results} setResults={setResults} />
       ) : (
        <Result setPageForm={setPageForm} results={results} />
       )}
    </Template>
  );
}

export default App;