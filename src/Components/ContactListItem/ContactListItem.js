import s from './ContactListItem.module.css'

export default function ContactListItem ({name,number,onDeleteContact,id}){
    return <li  className={s.item}>{name}:{number} 
    <button onClick={()=> onDeleteContact(id)} className={s.button}>delete</button>
    </li> 


}


