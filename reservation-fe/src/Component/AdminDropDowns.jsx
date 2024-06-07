import Dropdown from 'react-bootstrap/Dropdown';

function AdminDropDowns() {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/adminhomepage/addbus">Add Bus</Dropdown.Item>
            <Dropdown.Item href="/adminhomepage/viewbus">Bus Lists</Dropdown.Item>
            <Dropdown.Item href="/adminhomepage/editbus">Edit profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log-out</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default AdminDropDowns;