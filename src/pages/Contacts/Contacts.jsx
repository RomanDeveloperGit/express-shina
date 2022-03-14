import ContactItem from "../../components/ContactItem/ContactItem";
import styles from "./Contacts.module.scss";

import stateInfo from "../../API/state.json";
import ContactProvider from "../../providers/ContactProvider";

const Contacts = () => {
	const pickPoints = stateInfo.pickPoints;

	return (
		<div className={styles["contact-page"]}>
			<div className={styles["contact-page__container"]}>
				<div className={styles["contact-page__item-box"]}>
					<ContactProvider>
						{pickPoints.map( ( item, index ) =>
							<ContactItem index={index} title={item.address} notes={item.budgets} key={index} />
						)}
					</ContactProvider>
				</div>
			</div>
		</div>
	);
};

export default Contacts;