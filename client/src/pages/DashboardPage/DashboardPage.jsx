import React, { useEffect, useState } from 'react';
import DashboardForm from '../../forms/DashboardForm/DashboardForm';

// Import the necessary hooks and functions
import { useAuth } from '../../Hooks/useAuth';
import { getToken } from '../../utls/getToken';

const baseURL = import.meta.env.VITE_API_URL; // Your API base URL

const DashboardPage = () => {
    const { authUser } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (authUser) {
                const token = getToken(); // Replace with your token retrieval logic

                try {
                    const res = await fetch(`${baseURL}/user`, {
                        headers: {
                            Authorization: token,
                        },
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setUserData(data);
                    } else {
                        // Handle errors here, e.g., redirect to a login page
                        console.error('Error fetching user data:', res.status);
                    }
                } catch (error) {
                    // Handle network or other errors here
                    console.error('Error fetching user data:', error);
                }
            }
        };

        if (authUser) {
            fetchUserData();
        }
    }, [authUser]);

    return (
        <div className="container my-5">
            {authUser ? (
                <DashboardForm userData={userData} />
            ) : (
                <p>Please sign in to access the dashboard.</p>
            )}
        </div>
    );
};

export default DashboardPage;
