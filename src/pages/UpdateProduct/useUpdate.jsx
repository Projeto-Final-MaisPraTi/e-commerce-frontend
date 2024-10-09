import { useContext } from "react";
import { RegisterContext } from "./RegisterContext";

const useRegister = () => useContext(RegisterContext);

export default useRegister;
