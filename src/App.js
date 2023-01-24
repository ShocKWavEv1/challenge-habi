import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import FormPage from './pages/FormPage/FormPage';
import { routes } from './utils/routes/routes';
import MainContext from './context/context';
import { useEffect, useState } from 'react';
import ResultPage from './pages/ResultPage/Index';
import { initialState } from './utils/initialState';

function App() {
  const [currentIdx, handleCurrentIdx] = useState(localStorage.getItem("currentIdx"));
  const [payload, setPayload] = useState(initialState);

  const navigate = useNavigate();

	const currentStep = localStorage.getItem("currentIdx");

	useEffect(() => {
		currentStep ? navigate(`${currentIdx}`) : navigate("/");
		// eslint-disable-next-line
	}, []);

  const resetPayload = () => {
    setPayload({});
  }

  const handlePayload = (value, nameForm) => {
    setPayload(prevState => ({
      ...prevState,
      [nameForm]: value[nameForm]
    }));
  }

  return (
    <MainContext.Provider value={{ currentIdx, handleCurrentIdx, payload, handlePayload, resetPayload }} >
      <Routes>
        <Route path="/" element={<Landing />} />
        {
          routes.map((route, i) => {
            return(
              <Route
                key={i}
                path={route.component.path}
                element={<FormPage pageData={route} totalSteps={routes.length} />}
              />
            )
          })
        }
        <Route path="/resultados" element={<ResultPage />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
