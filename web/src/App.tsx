import React from 'react';
import GlobalStyle from './css/global';

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
    return (
        <>
            <SignUp />
            <GlobalStyle/>
        </>
    )
}
export default App;
