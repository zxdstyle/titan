import React, { useEffect, useState } from 'react';
import ActivityCalendar from 'react-activity-calendar';

export default function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length > 0) return;

        const dates = [];
        const now = new Date();
        for (let i = 0; i < 365; i++) {
            dates.push({
                date: `${now.getFullYear()}-${now.getMonth().toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`,
                count: Math.floor(Math.random() * 100 + 1),
                level: Math.floor(Math.random() * 3 + 1),
            });
            now.setDate(now.getDate() + 1);
        }
        setData(dates);
    }, []);
    console.log(data);
    return (
        <div className="w-full h-full">
            <ActivityCalendar data={data} theme={{ dark: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'] }} />
        </div>
    );
}
