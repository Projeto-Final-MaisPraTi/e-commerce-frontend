import styled from 'styled-components';

const LinkList=styled.div`
margin-bottom: 0;
padding-top: 40px;
padding-left: 0;
align-self: baseline;
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: center;

a{
color: #000;
text-decoration: none;
margin-top: 10px;
&:hover {
    border-bottom: solid 1px;
  }}
  @media (max-width: 767px) {
    align-items: center;
  }
  
`;

function Category() {
    return(
        <LinkList className='col-12 col-md-2'>
        <a href="">Phones</a>
        <a href="">Computers</a>
        <a href="">SmartWatch</a>
        <a href="">Camera</a>
        <a href="">HeadPhones</a>
        </LinkList>
        )
}

export default Category;