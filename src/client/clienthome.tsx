import { Route, Routes } from 'react-router-dom';
import NavBar from '../shared/navbar';
import WorkoutProgramList from '../workout-programs/program-list';
import ProgramDetails from '../workout-programs/program-details';
import { NavBarRoute } from '../shared/navRouter';

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
				<Route path="/:id" element={<ProgramDetails></ProgramDetails>}></Route>
			</Routes>
		</div>
	);
}
