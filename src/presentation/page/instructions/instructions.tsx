import React, { useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { Container } from './instructions.styles';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Intructions: React.FC<RouteComponentProps> = props => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      {step === 1 && <Step1 next={() => setStep(2)} />}
      {step === 2 && <Step2 back={() => setStep(1)} next={() => setStep(3)} />}
      {step === 3 && (
        <Step3
          back={() => setStep(2)}
          next={() => props.history.push('/playground')}
        />
      )}
    </Container>
  );
};

export default Intructions;
