import styled from "styled-components";

const FooterHeaderContainer = styled.div`
  hr {
    border: 0;
    height: 1px;
    background-color: gray;
    margin: 0 auto;
  }
`;

const FooterHeader = () => (
  <FooterHeaderContainer>
    <hr />
  </FooterHeaderContainer>
);

export default FooterHeader;
