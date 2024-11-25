import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {item.number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(item.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
