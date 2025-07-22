import { useEffect, useState } from "react"
import Character from "../interfaces/Character"
import CharacterCard from "./CharacterCard"
import { auth } from "../config/firebase";

export const fetchCharacters = async () => {
    const token = await auth.currentUser?.getIdToken(); // ⬅️ this belongs here!
  
    const res = await fetch("http://127.0.0.1:5001/example-proj-1-6b18f/us-central1/api/characters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await res.json();
    return data;
  };

const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5001/example-proj-1-6b18f/us-central1/api/characters")
                const data = await response.json()
                setCharacters(data.data)
            } catch (error) {
                console.error("Error fetching characters: ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCharacters()
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>All Characters</h2>
            <div className="character-grid">
                {characters.map((character) => (
                    <CharacterCard key={character.index} {...character} />
                ))}
            </div>
        </div>
    )
}

export default CharacterList