import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const PostCreate = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control type="email" placeholder="Enter title" />
        <Form.Text className="text-muted">
          We'll never share your title with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PostCreate;
