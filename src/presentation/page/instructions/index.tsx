import React, { useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Intructions: React.FC<RouteComponentProps> = props => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <Step1 onClick={() => setStep(2)} />}
      {step === 2 && <Step2 onClick={() => setStep(3)} />}
      {step === 3 && (
        <Step3 onClick={() => props.history.push('/playground')} />
      )}
    </div>
  );
};

export default Intructions;
