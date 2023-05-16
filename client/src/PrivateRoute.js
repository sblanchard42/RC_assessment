import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Employees from './components/Employees/Employees';
import EmployeeDetail from './components/Employees/EmployeeDetail';
import getEmployee from './components/Employees/getEmployee';
import CreateEmployee from './components/api/createEmployee';
import NotFound from './components/Errors/NotFound';
import Forbidden from './components/Errors/Forbidden';
import UnhandledError from './components/Errors/UnhandledError';

import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <div id="root">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/employees" />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/:personal_id" element={<EmployeeDetail />} />
                    <Route path="/employees/:personal_id/update" element={<PrivateRoute />}>
                        <Route path="/employees/:personal_id/update" element={<UpdateEmployee />} />
                    </Route>
                    <Route path="/employees/create" element={<PrivateRoute />}>
                        <Route path="/employees/create" element={<CreateEmployee />} />
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;