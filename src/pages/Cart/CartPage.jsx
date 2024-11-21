import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import ShoppingCart from "../../components/Cart/ShoppingCart";
import {NoItensCart} from "../../components/Cart/NoItemsCart";
import { getAllCartItems } from '../../services/CartService';
import { useEffect, useState } from 'react';
import styled from "styled-components";

const LoadingMessage = styled.h1`
text-align: center;
margin: 250px 0;

`

function CartPage() {
  const [hasItems, setHasItems] = useState(null);
  const getItens = async () => {
    const response = await getAllCartItems();
    console.log("Quem sou eu?")
    console.log(response)
    if(!response==null || response.lenght>0){
      return true;
    }
    return false
  }


  useEffect(() => { 
    const fetchItems = async () => { 
      const items = await getAllCartItems(); 
      if (items == null || items.length < 1) { 
        setHasItems(false); 
      } else { setHasItems(true); } }; 
      fetchItems(); 
    }, []);


  return (
    <>
      <Header />
      <main>
        {hasItems === null ? 
        ( <LoadingMessage>Preparando seus produtos...</LoadingMessage> ) : 
        hasItems ? 
        ( <ShoppingCart/>) : 
        ( <NoItensCart/>  )}
        
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
