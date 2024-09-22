import styled from "styled-components";

const DividingLine = styled.div`
  hr {
    display: flex;
    width: 80%;
    border: 0;
    height: 0.5px;
    background-color: black;
    margin: 70px auto;
  }
`;

const FooterHeader = () => (
  <DividingLine>
    <hr />
  </DividingLine>
);

export default FooterHeader;
