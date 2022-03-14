import styles from "./Note.module.scss";

const Note = ({ children }) => {
	return (
		<div className={styles.note}>
			{children}
		</div>
	);
};

export default Note;