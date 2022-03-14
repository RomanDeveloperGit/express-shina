import { YMaps, Map, Placemark } from "react-yandex-maps"
import { mapData, stateInfo } from "../../utils/utils";
import useContactItem from "../../hooks/useContactItem";
import styles from "./YandexMap.module.scss";

const YandexMap = () => {
	const [activeItemIndex] = useContactItem();
	const activeItem = stateInfo[activeItemIndex];
	const placemarkCoords = [activeItem.latitude, activeItem.longitude];

	return (
		<YMaps>
			<div className={styles["yandex-map"]}>
				<Map width={"100%"} height={"100%"} defaultState={{ center: mapData.defaultCoords, zoom: mapData.defaultZoom }}>
					<Placemark geometry={placemarkCoords} />
				</Map>
			</div>
		</YMaps>
	);
};

export default YandexMap;