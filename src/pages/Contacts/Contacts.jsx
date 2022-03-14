import YandexMap from "../../components/YandexMap/YandexMap";
import ContactItem from "../../components/ContactItem/ContactItem";
import ContactProvider from "../../providers/ContactProvider";
import { stateInfo } from "../../utils/utils";
import styles from "./Contacts.module.scss";

const Contacts = () => {
	return (
		<div className={styles["contact-page"]}>
			<div className={styles["contact-page__container"]}>
				<ContactProvider>
					<div className={styles["contact-page__item-box"]}>
						{stateInfo.map( ( item, index ) =>
							<ContactItem index={index} title={item.address} notes={item.budgets} key={index} />
						)}
					</div>
					<div className={styles["contact-page__map-box"]}>
						<YandexMap />
					</div>
				</ContactProvider>
			</div>
		</div>
	);
};

export default Contacts;