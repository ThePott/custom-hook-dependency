import { useState, useEffect } from "react";

interface User {
    id: number
    name: string
}

// ❌ Problem: useEffect doesn't re-run when userId changes
function useUserData(userId: number) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log('Fetching user:', userId);
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setUser({ id: userId, name: `User ${userId}` });
            setLoading(false);
        }, 1000);
    }, [userId]); // ❌ Empty dependency array - ignores userId changes

    return { user, loading };
}

export { useUserData }