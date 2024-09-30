// import { useState } from "react";
// import styled from "styled-components";
// import { FaHeart } from "react-icons/fa";

// const ProductCardContainer = styled.div`
//   flex: 0 0 180px;
//   margin-right: 20px;
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   position: relative;
//   overflow: hidden;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProductImageContainer = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// position: relative;
// top: 50px;
// margin: 0;
// padding: 0;
// `;

// const DiscountBadge = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   background-color: #e60023;
//   color: #fff;
//   padding: 5px;
//   border-radius: 3px;
//   font-size: 12px;
//   z-index: 1;
// `;

// const FavoriteIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     width: 20px;
//     height: 20px;
//     fill: ${({ isFavorite }) => (isFavorite ? "#e60023" : "#dbd9d9")};
//     stroke: ${({ isFavorite }) => (isFavorite ? "none" : "black")};
//     stroke-width: ${({ isFavorite }) => (isFavorite ? "0" : "2px")};
//   }
// `;


// const ProductImage = styled.img`
//   width: 85%;
//   border-radius: 8px;
//   margin-bottom: 10px;
// `;

// const ProductTitle = styled.h3`
//   font-size: 16px;
//   margin-bottom: 10px;
//   margin-top: 80px;
// `;

// const PriceContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
// `;

// const DiscountPrice = styled.span`
//   font-size: 18px;
//   font-weight: bold;
//   color: #e60023;
// `;

// const OriginalPrice = styled.span`
//   font-size: 16px;
//   color: #888;
//   text-decoration: line-through;
// `;

// const RatingContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const Star = styled.span`
//   color: #ffd700;
//   margin-right: 2px;
// `;

// const ReviewCount = styled.span`
//   font-size: 14px;
//   color: #666;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #000;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   opacity: 0;
//   transition: opacity 0.3s ease;

//   ${ProductCardContainer}:hover & {
//     opacity: 1;
//   }
// `;

// const ProductCard = ({ product }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleFavoriteClick = () => {
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <ProductCardContainer>
//       <DiscountBadge>{product.discount}</DiscountBadge>
//       <FavoriteIcon isFavorite={isFavorite} onClick={handleFavoriteClick}>
//           <FaHeart />
//         </FavoriteIcon>
//       <ProductImageContainer>
        
//         <ProductImage src={product.image} alt={product.title} />
//         <Button>Add To Cart</Button>
//       </ProductImageContainer>
      

//       <ProductTitle>{product.title}</ProductTitle>
//       <PriceContainer>
//         <DiscountPrice>{product.discountPrice}</DiscountPrice>
//         <OriginalPrice>{product.originalPrice}</OriginalPrice>
//       </PriceContainer>
//       <RatingContainer>
//         {[...Array(5)].map((_, index) => (
//           <Star key={index}>★</Star>
//         ))}
//         <ReviewCount>({product.reviewCount})</ReviewCount>
//       </RatingContainer>
//     </ProductCardContainer>
//   );
// };

// export default ProductCard;
