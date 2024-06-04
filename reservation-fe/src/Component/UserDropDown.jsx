import Dropdown from 'react-bootstrap/Dropdown';

function UserDropDown() {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/adminhomepage/updateuser">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Bookings</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log-out</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserDropDown;