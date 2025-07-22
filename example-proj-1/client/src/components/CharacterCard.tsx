import { FC } from "react"

interface Props {
    fullName: string
    nickname: string
    hogwartsHouse: string
    interpretedBy: string
    children: [string]
    image: string
    birthdate: string
}

const CharacterCard: FC<Props> = ({ 
    fullName, 
    nickname, 
    hogwartsHouse, 
    interpretedBy, 
    children, 
    image, 
    birthdate }) => {

    return (
        <div className="character-card">
            <h3>{fullName}</h3>
            <p>Nickname: {nickname}</p>
            <p>Birthday: {birthdate}</p>
            <p>Hogwarts House: {hogwartsHouse}</p>
            <p>Children: {children}</p>
            <p>Played By: {interpretedBy}</p>
            <img src={image} alt={fullName} />
        </div>
    )
}

export default CharacterCard