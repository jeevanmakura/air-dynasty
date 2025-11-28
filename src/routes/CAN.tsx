import React, { useEffect, useState } from 'react';

// roles.ts
export type Role = "admin" | "agent" | "user";



interface CanProps {
    permissions?: string[];
    role: Role
    children: React.ReactNode;
}

export default function CAN({ role, children }: CanProps) {
    // const user = {
    //     name: "John Doe",
    //     role: "agent",
    // };

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("activeUser");
        return stored ? JSON.parse(stored) : { name: "John Doe", role: "admin" };
    });

    useEffect(() => {
        const handleStorage = () => {
            const updated = localStorage.getItem("activeUser");
            if (updated) setUser(JSON.parse(updated));
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    // const userPermissions = user.permissions || [];

    // const hasPermission = permissions.some(p => userPermissions.includes(p));
    const userPermissions = user.role;
    const hasPermission = role === userPermissions;

    if (!hasPermission) return null;

    return <>{children}</>;
}
