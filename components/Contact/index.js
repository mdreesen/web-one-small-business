import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from '../../styles/Contact.module.css';

export default function Contact() {

    return (
        <Form action="https://formsubmit.co/?" method="POST">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                <Form.Text className="text-muted">
                    First and last name
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
}

