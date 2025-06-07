const {connect} = require("mongoose");

const connectToDB = async () => {
    try {
        const dbUrl = process.env.DATABASE_URI
        await connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connection Established Successfully');
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
        
    }
};

module.exports = connectToDB;