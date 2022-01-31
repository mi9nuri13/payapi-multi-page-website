import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';
import { useEffect } from "react";

const App = () => {
    const theme = createTheme();

    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    //const RoadmapPage = loadable(() => import(/* webpackChunkName: "RoadmapPage" */ '../Roadmap'));
    //const NewFeedbackPage = loadable(() => import(/* webpackChunkName: "NewFeedbackPage" */ '../NewFeedback'));
    //const FeedbackDetailsPage = loadable(() => import(/* webpackChunkName: "FeedbackDetailsPage" */ '../FeedbackDetails'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                            </Routes>
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;