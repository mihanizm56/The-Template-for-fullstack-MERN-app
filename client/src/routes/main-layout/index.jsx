import React from "react";
import { Switch } from "react-router-dom";
import { MainPageRoute } from "../page-route";

export const MainLayout = () => {
	return (
		<Switch>
			<MainPageRoute path="/" />
		</Switch>
	);
};
