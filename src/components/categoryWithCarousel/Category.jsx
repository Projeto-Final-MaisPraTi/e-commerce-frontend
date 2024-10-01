import styled from "styled-components";

const LinkList = styled.div`
  border-right: solid 1px;
  border-color: gray;
  margin-bottom: 0;
  padding-top: 20px;
  padding-right: 10px;
  align-self: baseline;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 10px;

  a {
    color: #000;
    text-decoration: none;
    margin-top: 10px;
    &:hover {
      border-bottom: solid 1px;
    }
  }

  @media (max-width: 767px) {
    border-right: none;
    align-items: center;
  }
`;

function Category() {
  return (
    <LinkList className="col-12 col-md-2">
      <a href="">Phones</a>
      <a href="">Computers</a>
      <a href="">SmartWatch</a>
      <a href="">Camera</a>
      <a href="">HeadPhones</a>
    </LinkList>
  );
}

export default Category;
