const { Command } = require('commander')
const chalk = require('chalk')
const { listContacts, addContact, getContactById } = require('./contacts')

const program = new Command();
program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
(async ({ action, id, name, email, phone }) => {

    try {    
        switch (action) {
          case 'list':
            const contacts = await listContacts()
            console.table(contacts)
            
            break;
      
          case 'get':
           const getContact = await getContactById(id)
           if (getContact) {
            console.log(chalk.green('Contact found'))
            console.log(getContact)
           } else {
            console.log(chalk.yellow('Contact not found'))
           }
            break;
      
          case 'add':
            const contact = await addContact(name, email, phone)
            console.log(chalk.green('Add new contact'))
            console.log(contact)
            break
      
          case 'remove':
            // ... id
            break;
      
          default:
            console.warn(chalk.red('Unknown action type!'))
        }

    } catch (error) {
        console.error(chalk.red(error.message));
    }
})(argv)


