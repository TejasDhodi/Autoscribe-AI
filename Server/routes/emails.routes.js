const express = require('express');
const { storeCSV, getEmails, getAllEmailsList, deleteEmail } = require('../controller/emails.comtroller');
const router = express.Router();

router.post('/storeCsv', storeCSV);
router.get('/emails', getEmails);
router.get('/emailLists', getAllEmailsList);
router.delete('/emails/delete/:id', deleteEmail);

module.exports = router;