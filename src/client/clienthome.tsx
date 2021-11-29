import { Route, Routes } from 'react-router-dom';
import NavBar from '../shared/navbar';
import { NavBarRoute } from '../trainer/trainerhome';
import WorkoutProgramList from '../workout-programs/program-list';

export default function ClientHome() {
	const clientRoutes: NavBarRoute[] = [
		{
			label: 'List',
			route: '/',
		},
	];

	return (
		<div>
			<NavBar routes={clientRoutes}></NavBar>
			<Routes>
				<Route path="/" element={<WorkoutProgramList></WorkoutProgramList>}></Route>
				{/* furutre navigation... */}
			</Routes>
		</div>
	);
}
