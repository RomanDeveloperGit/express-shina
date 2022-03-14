import { useContext } from "react";
import { ContactItemContext } from "../providers/ContactProvider";

const useContactItem = () => useContext( ContactItemContext );

export default useContactItem;