import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentCreate = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>comment</Form.Label>
        <Form.Control type="email" placeholder="Enter comment" />
        <Form.Text className="text-muted">
          We'll never share your comment with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CommentCreate;
