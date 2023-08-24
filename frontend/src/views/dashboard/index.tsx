import React, { useEffect, useState } from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { Tooltip } from 'antd';

export default function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length > 0) return;

        const dates = [];
        const now = new Date();
        for (let i = 0; i < 52; i++) {
            dates.push({
                date: `${now.getFullYear()}-${now.getMonth().toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`,
                count: Math.floor(Math.random() * 100 + 1),
                level: Math.floor(Math.random() * 3 + 1),
            });
            now.setDate(now.getDate() + 1);
        }
        setData(dates);
    }, []);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <ActivityCalendar
                    data={data}
                    theme={{ light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'] }}
                    blockRadius={4}
                    blockMargin={6}
                    blockSize={18}
                    hideTotalCount={true}
                    showWeekdayLabels={true}
                    renderBlock={(block, activity) => <Tooltip title={`${activity.count} activities on ${activity.date}`}>{block}</Tooltip>}
                    style={{ marginLeft: '40px' }}
                />
            </div>
        </div>
    );
}
