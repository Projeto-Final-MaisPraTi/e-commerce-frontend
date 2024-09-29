// import styled from "styled-components";
// import { Rating } from "@mui/material";
// import eye from "../../assets/eye.svg";
// import IconHeart from "./IconHeart";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   width: 270px;
// `;

// const ContainerImg = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 270px;
//   height: 250px;
//   background: #f5f5f5;
//   img {
//     max-width: 200px;
//     max-height: 180px;
//   }
// `;
// const Heart = styled(IconHeart)`
//   right: 0;
//   margin-top: 10px;
//   margin-right: 10px;
//   height: 22px;
//   position: absolute;
//   fill: none;
//   stroke: black;
//   :hover {
//     fill: red;
//     stroke: none;
//   }
// `;

// const FavIcon = styled.span`
//   display: inline-block;
//   height: 2px;
//   position: relative;
//   cursor: pointer;
// `;

// const ViewerIcon = styled.span`
//   position: relative;
//   img {
//     right: 0;
//     top: 30px;
//     margin-top: 10px;
//     margin-right: 10px;
//     height: 22px;
//     position: absolute;
//   }
// `;

// const Details = styled.div`
//   margin-top: 15px;
//   p {
//     margin: 0;
//     font-weight: bold;
//   }
//   div {
//     display: flex;
//     gap: 5px;
//     align-items: center;
//     margin-top: 10px;
//     .value {
//       color: #db4444;
//     }
//     .avaliation {
//       opacity: 60%;
//     }
//   }
// `;
// export default function CardProduct({ img, name, value, star, avaliations }) {
//   return (
//     <Container>
//       <FavIcon>
//         <Heart />
//       </FavIcon>
//       <ViewerIcon>
//         <img src={eye} alt="" />
//       </ViewerIcon>
//       <ContainerImg>
//         <img src={img} alt="" />
//       </ContainerImg>
//       <Details>
//         <p>{name}</p>
//         <div>
//           <span className="value">R${value}</span>
//           <Rating max={5} size="small" readOnly value={star} />
//           <span className="avaliation">({avaliations})</span>
//         </div>
//       </Details>
//     </Container>
//   );
// }
