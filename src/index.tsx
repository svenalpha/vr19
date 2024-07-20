


import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import routes from '@core/routes';
import { WorkoutsContextProvider } from "./context/WorkoutContext";

import '@assets/styles/index.scss'

const router = createBrowserRouter(routes);

const context = {}




ReactDOM.hydrateRoot(
	document.getElementById("app") as HTMLElement,
	
	  <HelmetProvider context={context}>
          <WorkoutsContextProvider>
		    <App>
			   <RouterProvider router={router} fallbackElement={null} />
		    </App>
		 </WorkoutsContextProvider>
	  </HelmetProvider>
	
);
