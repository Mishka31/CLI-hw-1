const fs = require('fs/promises')
const path = require('path')
const contactsPath  = path.join(__dirname, './db', 'contacts.json')

const readData = async () => {
    const result = await fs.readFile(contactsPath , 'utf8')
return JSON.parse(result)
}

const listContacts = async () => {
return await readData()
  }
  
  const getContactById = async (contactId) => {
    const contacts = await readData()
    const [result] = contacts.filter(contact => contact.id === Number(contactId))
    return result
}
  
  const removeContact = async (contactId) => {
    const contacts = await readData()
    const [obj] = contacts.filter(contact => contact.id === Number(contactId))
    if(!obj){return}
   const index = contacts.indexOf(obj)
    contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return contacts
  }
  
  const addContact = async (name, email, phone) => {
    const contacts = await readData()
    const newContact = { id: Number(contacts.length), name, email, phone }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact
  }

  module.exports = { listContacts, getContactById, removeContact, addContact }