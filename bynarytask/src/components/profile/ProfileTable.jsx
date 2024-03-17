/* eslint-disable react/prop-types */
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileTable = ({ onDelete, profiles }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile) => (
          <tr key={profile.id}>
            <td>{profile.name}</td>
            <td>{profile.contact}</td>
            <td className="d-flex gap-2">
              <Link to={`/${profile.id}`}>
                <Button size="sm" variant="primary">
                  View
                </Button>
              </Link>
              <Button size="sm" variant="info">
                Edit
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => onDelete(profile.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProfileTable;
