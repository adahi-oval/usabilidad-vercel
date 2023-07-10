import React from 'react';
import { Button } from 'react-bootstrap';

const BotonEmail = () => {

  const handleEmailClick = () => {
  };

  return (
    <Button variant="primary" onClick={handleEmailClick} className='mt-3'>
      Contáctanos
    </Button>
  );
};

export default BotonEmail;
