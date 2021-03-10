const express = require('express');
const router = express.Router();
const contactsController = require('../../controller');
const { validateContact } = require('../../service/validation');


  router.get('/', contactsController.listContacts)
  router.post('/', validateContact, contactsController.addContact);


  router.get('/:contactId', contactsController.getContactById)
  router.delete('/:contactId', contactsController.removeContact)
  router.patch('/:contactId', validateContact, contactsController.updateContact);

module.exports = router;