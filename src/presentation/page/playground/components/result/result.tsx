import React from 'react';
import { Page } from './styles';

const Result: React.FC<{ history: any }> = ({ history }): JSX.Element => {
  const finish = () => {
    history.push('/exam');
  };

  return (
    <Page>
      <div className="container">
        <h1>Parabéns, você finalizou o modo teste!</h1>
        <h2>Agora você será redirecionado para o teste real.</h2>
        <button type="button" onClick={finish}>
          Iniciar o teste real
        </button>
      </div>
    </Page>
  );
};

export default Result;
