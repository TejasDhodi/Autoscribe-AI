const Email = require("../model/email.model");

const storeCSV = async (req, res) => {
  try {
    const { emailList, fileName } = req.body;

    if (!emailList || !Array.isArray(emailList)) {
      return res.status(400).json({ error: "Invalid or missing email list" });
    } else if (fileName && typeof fileName !== "string") {
      return res.status(400).json({ error: "Invalid file name" });
    }

    await Email.create({
      emailList,
      fileName,
    });
    return res.status(200).json({
      success: true,
      message: "Emails received successfully",
      data: emailList,
    });
  } catch (error) {
    console.error("Error storing emails:", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "storeCSV Controller Failed",
    });
  }
};

const getEmails = async (req, res) => {
  try {
    const { fileName } = req.query;
    const emails = await Email.find({ fileName });

    return res.status(200).json({
      success: true,
      message: "Emails fetched successfully",
      data: emails,
    });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "getEmails Controller Failed",
    });
  }
};

const getAllEmailsList = async (req, res) => {
  try {
    const emailList = await Email.find();
    return res.status(200).json({
      success: true,
      message: "All Emails fetched successfully",
      data: emailList,
    });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "getEmails Controller Failed",
    });
  }
};

const deleteEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmail = await Email.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Email deleted successfully",
      data: deletedEmail,
    });
  } catch (error) {
    console.error("Error deleting email:", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "deleteEmail Controller Failed",
    });
  }
};
module.exports = { storeCSV, getEmails, getAllEmailsList, deleteEmail };
