import styled from "styled-components";

const Nav = styled.nav`
    width: 77%;
    margin: auto;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    .nav-links{
        display: flex;
        list-style-type: none;
        margin-bottom: 0;
        gap: 30px;
        li{
            padding: 10px;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                border-radius: 5px;
                box-shadow: 0 0 3px rgba(3, 0, 0, 0.2);
                transition: 0.5s;
            }
        }
    }
`

const NavManage = () => {
    return (
        <Nav>
            <ul className="nav-links">
                <li>Manage Home</li>
                <li>Register Product</li>
                <li>Update Product</li>
            </ul>
        </Nav>
    )
}

export default NavManage;