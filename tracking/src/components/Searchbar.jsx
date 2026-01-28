import React from 'react'

export default function Searchbar({ searchTerm, setSearchTerm }) {

    return (
        <div>
            <input type="text"
                placeholder='enter recipe name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    borderRadius: "10px",
                    width: "30%",
                    padding: "10px",
                    fontSize: "1.3rem"

                }}
            />

        </div>
    )
}
