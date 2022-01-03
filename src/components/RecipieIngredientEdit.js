import React from 'react'

export default function RecipieIngredientEdit({ingredient}) {
    return (
        <>
            <input className='recipie-edit__input' value={ingredient.name} type='text'/> 
            <input className='recipie-edit__input' value={ingredient.amount} type='text'/> 
            <button className='btn btn--danger'>&times;</button>
        </>
    )
}
