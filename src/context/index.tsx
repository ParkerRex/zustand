// Create a context
// Create a wrapper

import { createContext, useContext, useState } from "react";

const AppContext = createContext("Hello World");

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, setState] = useState("Hello World");
	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
