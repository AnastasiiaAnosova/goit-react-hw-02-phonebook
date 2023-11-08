import React from 'react'

const ContactList = ({contacts}) => {
  return (
      <div>
          <ul>
              {contacts.map((contact) => (
                  <li key={contact.id}>{contact.name}: {contact.number}</li>
              ))}
          </ul>
      </div>
  )
}

export default ContactList;


/**
 * <button
			type='button'
      className='btn-close'
      aria-label='Close'
      // викликаємо коллбєком, так як потрібно передати id, а ні евент
      onClick={()=> handleDelete(contact.id)}
		></button>
 */
