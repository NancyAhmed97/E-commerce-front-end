import React from 'react'
import styledComponents from 'styled-components';
import {categories} from "../data"
import CategoryItem from './CategoryItem'
function Categories() {
    const Container = styledComponents.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
  return (
<Container>
    {categories.map((item)=>{
        return(
            <CategoryItem item={item} key={item.id}/>
        )
    })}
</Container>  )
}

export default Categories