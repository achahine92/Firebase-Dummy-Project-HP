import HTTPHandler from "../helpers/HTTPHandler"
import Character from "../models/Character"
import { getAllCharacters } from "../services/hpAPIServices"


export const fetchAllCharacters: HTTPHandler = async (req, res) => {
    try {
        const characters = await getAllCharacters()
        if (!characters || characters.length === 0) {
            res.status(404).json({ message: "No characters fround from the external API" })
        }

        const savedCharacters = []
        for (const character of characters) {
            const formattedCharacter = {
                fullName: character.fullName,
                nickname: character.nickname,
                hogwartsHouse: character.hogwartsHouse,
                interpretedBy: character.interpretedBy,
                children: character.children || [],
                image: character.image,
                birthdate: character.birthdate,
                index: character.index
              };
            const saved = await Character.findOneAndUpdate(
                { index: character.index },
                formattedCharacter,
                { upsert: true, new: true }
            )
            savedCharacters.push(saved)
        }
        res.status(200).json({ data:  savedCharacters })
    } catch (error) {
        res.status(500).json({ message: "Error fetching characters" })
    }
}