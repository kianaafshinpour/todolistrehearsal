import React from "react";
import FirstPart from "../components/firstPart";
import AppProvider from "../redux/store";
function Home(){
    return(
        <AppProvider>
         <FirstPart/>
        </AppProvider>
    );
}
export default Home;