import { model, Schema } from "mongoose";

const CharacterSchema = new Schema({
    fullName: { type: String, required: true },
    nickname: { type: String, required: true },
    hogwartsHouse: { type: String, required: true },
    interpretedBy: { type: String, required: true },
    children: { type: [String], required: true },
    image: { type: String, required: true },
    birthdate: { type: String, required: true },
    index: { type: Number, required: true }
})

export default model("Character", CharacterSchema)