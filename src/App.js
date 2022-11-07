import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ScopeStatus from './status/ScopeStatus';
import TodaySchedule from './schedule/TodaySchedule';

//Styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//External files
import scopeData from "./db/scopes.json"
import SampleScope from './sampling/SampleScope';
import RemoveItemsPage from './sampling/RemoveItemsPage';

const App = () => {
  useEffect(() => {
    //Check if there is staff details in local storage. If no, initialise it. 
    localStorage.getItem('staffDetails') == null
      && localStorage.setItem("staffDetails", JSON.stringify({
        staffId: "",
        staffName: "",
        assistantId: "",
        assistantName: ""
      }))

    //Check if there is scanning details in local storage. If no, initialise it. 
    localStorage.getItem('scanningDetails') == null
      && localStorage.setItem("scanningDetails", JSON.stringify({
        date: "",
        time: "",
        serialNo: "",
        brand: "",
        type: "",
        model: ""
      }))

      localStorage.getItem("scopes") == null 
      && localStorage.setItem("scopes", JSON.stringify(scopeData))

  }, [])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample/employeedetails" element={<SampleScope />} />
          <Route path="/sample/scanscope" element={<SampleScope />} />
          <Route path="/sample/confirmation" element={<SampleScope />} />
          <Route path="/sample/removeitems" element={<RemoveItemsPage />} />
          <Route path="/schedule" element={<TodaySchedule />} />
          <Route path="/status" element={<ScopeStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
