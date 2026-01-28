import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DifficultyFilter from './DifficultyFilter'

export default function RecipeList() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    loadRecipes()
  }, [])

  async function loadRecipes() {
    const res = await axios.get("https://dummyjson.com/recipes")
    setRecipes(res.data.recipes)
    setLoading(false)
  }

  const difficulties = [...new Set(recipes.map(r => r.difficulty))]

  const filteredRecipes = recipes.filter(
    r => selectedCategory === "" || r.difficulty === selectedCategory
  )

  if (loading) return <p>Loading...</p>

  return (
    <div className="container my-4">
      <h1 className="mb-4">Recipe App</h1>

      {/* Filter dropdown */}
      <DifficultyFilter
        difficulties={difficulties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <hr />

      {/* Show message if no recipes */}
      {filteredRecipes.length === 0 && <p>No recipes found</p>}

      {/* Flex container for recipe cards */}
      <div className="d-flex flex-wrap justify-content-start gap-3">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="border border-success p-3 text-center"
            style={{ width: "220px" }}
          >
            <h5>{recipe.name}</h5>
            <p>Difficulty: {recipe.difficulty}</p>
            <img
              src={recipe.image}
              className="img-fluid"
              style={{ height: "150px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}








