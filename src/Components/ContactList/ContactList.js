import ContactListItem from "../ContactListItem/ContactListItem"
import s from './ContactList.module.css'

export default function ContactList ({contacts, onDeleteContact}){

    return <ul className={s.list}>
{contacts.map(contact =>(
         
         <ContactListItem 
         key = {contact.id}
         id={contact.id}
         name= {contact.name}
         number={contact.number}
         onDeleteContact={onDeleteContact}
         /> 
      ))}
    </ul>

}