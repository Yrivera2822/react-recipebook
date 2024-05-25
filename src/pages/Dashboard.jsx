import React from 'react'
import ListItem from '../components/ListItem'
import AddDish from '../components/AddDish'

function Dashboard({dishes, setDishes}) {
  return (
    <div>
        <ListItem dishes={dishes} setDishes={setDishes}/>
        <AddDish dishes={dishes} setDishes={setDishes} />

    </div>
  )
}

export default Dashboard