import React from 'react'
import { GridFaqs } from '../components/GridFaqs';
import { Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const Faqs = () => {
  return (
    <div id='itemsX'>
      <Card.Text>
        <Breadcrumb aria-label='Breadcrumbs'>
          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Preguntas frecuentes</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Text>
      <header>
        <Card border="light" className='shadow-none'>
          <Card.Body>
            <Card.Title style={{ fontSize: "35px"}} className='border-bottom pb-4 mb-4'>¿Cómo podemos ayudarte?</Card.Title>
          </Card.Body>
        </Card>
      </header>
      <GridFaqs/>
    </div>

  );
}
