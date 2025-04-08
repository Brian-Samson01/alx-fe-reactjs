import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div>
      <h1>User Registration Forms</h1>
      
      <section>
        <RegistrationForm />
      </section>

      <hr />

      <section>
        <FormikForm />
      </section>
    </div>
  );
};

export default App;
// This code defines a simple React application that includes two user registration forms:
// 1. A controlled form using React's state management.
// 2. A form using Formik, a popular library for handling forms in React.
// The application imports both forms and renders them within a main component called `App`.
// The `RegistrationForm` component manages its own state and validation, while the `FormikForm` component utilizes Formik for easier form handling and validation with Yup.