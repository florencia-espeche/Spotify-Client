import React ,{useState, createContext, useContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './pages/Login';
import Home from './pages/Home/index';
import Results from './pages/Results';
import ResultDetail from './pages/ResultDetail';

export const LoginContext = createContext(null);

const App = ({ store }) => {
	 const[login, setLogin] = useState('');

const reg = (nom) => {setLogin(nom)};

	return (
	<Provider store={store}>
	<LoginContext.Provider value={{login, reg}}>
		<Router>
			<div>
				<Route exact path="/" component={Login} />
				<Route exact path="/home" component={Home} />
				<Route path="/results" component={Results}/>
				<Route path="/movie/:movieId" component={ResultDetail}/>
				
			</div>
		</Router>
	</LoginContext.Provider>	
	</Provider>
)};

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
