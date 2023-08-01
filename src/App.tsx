import Counter from "./components/counter/Counter";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import useTheme from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <p><Link to={'/'}>to Main Page</Link></p>
            <p><Link to={'/about'}>to About Page</Link></p>
            <button onClick={toggleTheme}>Change theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;