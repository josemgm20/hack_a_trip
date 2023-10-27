import React, { useEffect, useState } from 'react';

import DashboardForm from '../../forms/DashboardForm/DashboardForm';

// Import the necessary hooks and functions
import { useAuth } from '../../Hooks/useAuth';





const DashboardPage = () => {
    const { authUser, loading } = useAuth();

    // Ensure userData is an object or an empty object
    const userData = authUser || {};

    return (
        <main>
            <DashboardForm userData={userData} loading={loading} />
        </main>
    );
}

export default DashboardPage;
