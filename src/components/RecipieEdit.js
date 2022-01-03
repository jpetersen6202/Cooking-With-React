import React from 'react'
import RecipieIngredientEdit from './RecipieIngredientEdit'

export default function RecipieEdit() {
    return (
        <div className='recipie-edit'>
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />
                <label htmlFor='cookTime'>Cook Time</label>
                <input type='text' name='cookTime' id='cookTime' />
                <label htmlFor='servings'>Servings</label>
                <input type='text' name='servings' min='1' id='servings' />
                <label htmlFor='instructions'>Instructions</label>
                <textarea name='instructions' id='instructions' />
            </div>

            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div />
                <RecipieIngredientEdit />
                <RecipieIngredientEdit />
            </div>
            <div>
                <button>Add Ingredient</button>
            </div>
        </div>
    )
}
