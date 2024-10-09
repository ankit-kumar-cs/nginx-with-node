import { useState } from "react";
import { fetchBasicApp1Information, fetchBasicApp2Information } from "../api";

const appInfoByName = {
	app1: fetchBasicApp1Information,
	app2: fetchBasicApp2Information
}

export const AppList = () => {
	const [app1Info, setApp1Info] = useState('');
	const [app2Info, setApp2Info] = useState('');

	const onClick = async (appName) => {
		const isSynced = appName === 'app1' ? app1Info.length : app2Info.length;
		// if (isSynced) return;
		const appInfo = (await appInfoByName[appName]()).data;
		console.log('appInfo', appInfo);
		
		appName === 'app1' ? setApp1Info(appInfo) : setApp2Info(appInfo);
	}
	return (
		<div className="m-10">
			<details>
  				<summary onClick={() => onClick('app1')}>
					App 1 Info
				</summary>
  				<p>{app1Info}</p>
			</details>
			<details>
  				<summary onClick={() => onClick('app2')}>
					App 2 Info
				</summary>
  				<p>{app2Info}</p>
			</details>
		</div>
	)
}