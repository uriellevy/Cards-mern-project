import Card from "../db/models/CardModel";

export const getAllCards = async (req, res, next) => {
    try {
        const cards = await Card.find();
        res.status(200).json({ message: "All users recieved successfully", cards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// export const createCard = async (req, res, next) => {
//     const 
//     try {
//         const cards = await Card.find();
//         res.status(200).json({ message: "All users recieved successfully", cards });
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }