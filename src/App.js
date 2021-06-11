import React, { useState } from 'react';
import Template from './components/Template';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  const [pageForm, setPageForm] = useState(true);

  return (
    <Template>
      {pageForm ? (
        <Form setPageForm={setPageForm} />
       ) : (
        <Result setPageForm={setPageForm} />
       )}
    </Template>
  );
}

export default App;