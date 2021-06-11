import React, { useState } from 'react';
import Template from './components/Template';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  const [pageForm, setPageForm] = useState(true);
  const [quotation, setQuotation] = useState(null)

  return (
    <Template>
      {pageForm ? (
        <Form setPageForm={setPageForm} quotation={quotation} setQuotation={setQuotation} />
       ) : (
        <Result setPageForm={setPageForm} quotation={quotation} />
       )}
    </Template>
  );
}

export default App;