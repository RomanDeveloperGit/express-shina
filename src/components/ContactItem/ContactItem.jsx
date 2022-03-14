import { useEffect, useState } from "react";
import Note from "../Note/Note";
import useContactItem from "../../hooks/useContactItem";
import styles from "./ContactItem.module.scss";

const ContactItem = ({ index, title, notes }) => {
	const [activeItemIndex, setActiveItemIndex] = useContactItem();
	const [isActive, setActive] = useState( false );

	useEffect( () => setActive( activeItemIndex === index ), [activeItemIndex] );
	
	return (
		<button className={`${styles["contact-item"]} ${isActive && styles["contact-item_actived"]}`} onClick={() => setActiveItemIndex( index )}>
			<h2 className={styles["contact-item__title"]}>{title}</h2>
			<div className={styles["contact-item__note-box"]}>
				{notes.map( ( item, index ) => <Note key={index}>{item}</Note> )}
			</div>
		</button>
	);
};

export default ContactItem;