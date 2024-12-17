const AuctionItem = require("../models/auctionItem");
const { refineSearch } = require("../models/geminiModel");

const searchItems = async (req, res) => {
    try {
        const { query, useAI } = req.body;
        
        let keywords = query;
        if (useAI) {
            const result = await refineSearch(query);
            keywords = result;
        }

     // Perform keyword search in MongoDB
     const regex = new RegExp(keywords, "i");
        const items = await AuctionItem.find({
            $or: [
                { title: regex },
                { description: regex }
            ]
        });
        res.status(200).json({
            success: true,
            data: items,
            message: useAI ? "Search results using AI" : "Search results using keywords"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error occured",
            error: error.message
        });
    }
}

module.exports = { searchItems };