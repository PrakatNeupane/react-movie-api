import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { CustomCard } from '../Card/CustomCard'

export const SearchForm = () => {

    const [search, setSearch] = useState('');

    const handleOnChange = (e) => {
        const { value } = e.target;
        console.log(value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("got the searched value, now go get the movie from the api")
    }
    return (
        <>

            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form.Control placeholder="Search..."
                            onChange={handleOnChange}
                            required />
                    </Col>
                    <Col>
                        <Button
                            variant="warning"
                            type="submit"
                            value="search"
                        >Search
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Row>
                <Col className='d-flex justify-content-center'>
                    <CustomCard />
                </Col>
            </Row>
        </>
    )
}
