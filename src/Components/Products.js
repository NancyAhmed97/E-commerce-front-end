import React from 'react'
import styledComponents from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

function Products() {
    const Container = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
  return (
<Container>
    {popularProducts.map((item)=>{
        return(
        <Product item={item} key={item.id} />
        )
    })}
</Container>
    )
}

export default Products