import { useState } from "react"
import {AddCategory, GifGrid} from "./components/";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) =>{

        /* Validacion que el valor del input no se haya ingresado antes */

        const categoriesLower = categories.map(LowerCategory => {
            return LowerCategory.toLowerCase();
        });

        if (categoriesLower.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories ]); 
    }

  return (
    <>

    <h1>GifExpertApp</h1>
    
    <AddCategory 
        onNewCategory={onAddCategory}
    />

    {
        categories.map(category => 
            ( 
                <GifGrid 
                    key={category} 
                    category={category}
                />
            )
        )
    
    }

    </>
  )
}

export default GifExpertApp