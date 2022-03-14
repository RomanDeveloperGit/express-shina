import { createContext, useMemo, useState } from "react";
import { defaultActiveItemIndex } from "../utils/utils";

export const ContactItemContext = createContext( defaultActiveItemIndex );

const ContactProvider = ({ children }) => {
	const [activeItemIndex, setActiveItemIndex] = useState( defaultActiveItemIndex );
	const value = useMemo( () => [activeItemIndex, setActiveItemIndex], [activeItemIndex] );

	return (
		<ContactItemContext.Provider value={value}>
			{children}
		</ContactItemContext.Provider>
	);
};

export default ContactProvider;