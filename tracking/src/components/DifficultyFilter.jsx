import React from 'react'

export default function DifficultyFilter({
  difficulties,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">All Categories</option>

      {difficulties.map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  )
}


