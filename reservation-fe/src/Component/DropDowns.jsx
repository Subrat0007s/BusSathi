import Dropdown from 'react-bootstrap/Dropdown';

function DropDowns() {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/adminhomepage/addbus">Add Bus</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Bus Lists</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Edit profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log-out</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDowns;