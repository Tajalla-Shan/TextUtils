import React, { useState } from 'react'
import { Container, Row, Col, Form ,Button } from 'react-bootstrap';
import "./style.css"

export default function Home() {
  const [text ,setText] = useState("")

  const textChange = (event) => {
    setText(event.target.value)
  }

  const ConvertToUpper = () => {
    setText(text.toUpperCase())
  }

  const ConvertToLower = () => {
    setText(text.toLowerCase())
  }

  const CopyText = () => {
    navigator.clipboard.writeText(text)
  }

  const clearText = () => {
    setText("")
  }

  const removeSpaces = () =>{
    return setText(text.replace(/\s+/g, ' ').trim());
  }

  return (
    <>
       <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicTextArea">
            <Form.Label className='mb-1'><h1> Enter the text to analyze below </h1></Form.Label>
            <Form.Control as="textarea" value={text} onChange={textChange} rows={10} placeholder="Write your Text here..." className='textarea'/>
          </Form.Group>
        </Col>
        </Row>
        <Row className="justify-content-center mb-3 mt-2">
        <Col xs={12} md={6}>
          <Button variant="primary" disabled={!text} className='m-2' onClick={ConvertToUpper} block>
            Upper Case
          </Button>
          <Button variant="primary" disabled={!text} className='m-2' onClick={ConvertToLower} block>
            Lower Case
          </Button>
          <Button variant="primary" disabled={!text} className='m-2' onClick={CopyText}  block>
            Copy Text
          </Button>
          <Button variant="primary" disabled={!text} className='m-2' onClick={clearText} block>
            Clear Text
          </Button>
          <Button variant="primary" disabled={!text} className='m-2' onClick={  removeSpaces} block>
            Remove Extra Spaces
          </Button>
        </Col>
        
      </Row>
    </Container>
    </>
  )
}
