import React, { useState } from 'react';
import Template from './Components/Template'
import Form from './Components/Form'
import Result from './Components/Result'

function App() {
  const [pageForm, setPageForm] = useState(true);

  return (
    <Template>
      {pageForm ? <Form setPageForm={setPageForm} /> : <Result setPageForm={setPageForm} />}
    </Template>
  );
}

export default App;
