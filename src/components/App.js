import React, {useState} from 'react';
import RecipieList from './RecipieList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [recipies, setRecipies] = useState(sampleRecipies)
  
  function handleRecipieAdd() {
    const newRecipie = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instruc',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 tbs'}
      ]
    }
  
    setRecipies([...recipies, newRecipie])
  }

  function handleRecipieDelete(id) {
    setRecipies(recipies.filter(recipie => recipie.id != id))
  }

  return (
    <RecipieList 
      recipies={recipies}
      handleRecipieAdd = {handleRecipieAdd}
      handleRecipieDelete = {handleRecipieDelete}
    />
  )

}


const sampleRecipies = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
