const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')

const FILE = path.join(__dirname, 'contacts.json')

const readData = async () => {
    const result = await fs.readFile(FILE, 'utf8')
return JSON.parse(result)
}

const listContacts = async () => {
return await readData()
  }
  
  const getContactById = async (contactId) => {
    const contacts = await readData()
    const [result] = contacts.filter(contact => contact.id === contactId)
 return result
}
  
  const removeContact = async (contactId) => {
    const contacts = await readData()

    const [result] = contacts.filter(contact => contact.id !== contactId)
    console.log(result);
    // contacts.push(result)
    const indexOfContact = contacts.indexOf(contact);
    contacts.splice(indexOfContact, 1);
    await fs.writeFile(FILE, JSON.stringify(result, null, 2))
 return result
  }
  
  const addContact = async (name, email, phone) => {
    const contacts = await readData()
    const newContact = { id: crypto.randomUUID(), name, email, phone }
    contacts.push(newContact)
    await fs.writeFile(FILE, JSON.stringify(contacts, null, 2))
    return newContact
  }

  module.exports = { listContacts, getContactById, removeContact, addContact }