import ContactItem from "../../components/ContactItem/ContactItem";
import styles from "./Contacts.module.scss";

import stateInfo from "../../API/state.json";

const Contacts = () => {
	const pickPoints = stateInfo.pickPoints;

	return (
		<div className={styles["contact-page"]}>
			<div className={styles["contact-page__container"]}>
				<div className={styles["contact-page__item-box"]}>
					{pickPoints.map( ( item, index ) => <ContactItem title={item.address} notes={item.budgets} key={index} /> )}
				</div>
			</div>
		</div>
	);
};

export default Contacts;