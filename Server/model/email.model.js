const {model, Schema} = require("mongoose");

const emailSchema = new Schema({
    fileName: {
        required: true,
        type: String,
    },
    emailList: {
        required: true,
        type: [
            {
                type: String,
                match: /.+\@.+\..+/
            }
        ],
    },
});

const Email = model("Email", emailSchema);

module.exports = Email;