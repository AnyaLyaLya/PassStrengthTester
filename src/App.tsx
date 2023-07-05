import React from 'react';
import './App.scss';
import { PasswordForm } from './components/PasswordForm';

const App: React.FC = () => {
  return (
    <div className="pw-strength-tester">
      <div className="pw-strength-tester__container">
        <h1 className="pw-strength-tester__title">
          Password strength tester
        </h1>

        <PasswordForm />
      </div>
    </div>
  );
}

export default App;