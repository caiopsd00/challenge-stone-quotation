import React, { useEffect, useState } from 'react';
import axiosInstance from './config/axios'
import Template from './components/Template';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  const [pageForm, setPageForm] = useState(true);
  const [inputData, setInputData] = useState({
    quotation: 0,
    typeBuy: "money",
    price: 0,
    tax: 0
  })

  // Atualizando cotação do dolar
  useEffect(() => {
    if (pageForm) {
      async function getData() {
        const result = await axiosInstance.get("json/last/USD-BRL");
        setInputData(inputData => ({ ...inputData, quotation: result.data.USDBRL.bid }))
      }
      getData();
    }
  }, [pageForm]);

  return (
    <Template>
      {pageForm ? (
        // Editando valores de entrada
        <Form setPageForm={setPageForm} inputData={inputData} setInputData={setInputData} />
      ) : (
        // Mostrando resultado
        <Result setPageForm={setPageForm} inputData={inputData} />
      )}
    </Template>
  );
}

export default App;