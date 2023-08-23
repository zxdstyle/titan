import React from 'react';
import { Button, Tabs, TabsProps, Form } from 'antd';
import CrontabOption from './components/option';
import CrontabTitle from './components/title';

const items: TabsProps['items'] = [
    {
        key: 'second',
        label: <CrontabTitle label="秒" field="second" />,
        children: (
            <Form.Item name="second">
                <CrontabOption />
            </Form.Item>
        ),
    },
    // { key: 'minute', label: <CrontabTitle />, children: <CrontabOption field="minute" /> },
    // { key: 'hour', label: <CrontabTitle />, children: <CrontabOption field="hour" /> },
    // { key: 'day', label: <CrontabTitle />, children: <CrontabOption field="day" /> },
    // { key: 'month', label: <CrontabTitle />, children: <CrontabOption field="month" /> },
    // { key: 'week', label: <CrontabTitle />, children: <CrontabOption field="week" /> },
    // { key: 'year', label: <CrontabTitle />, children: <CrontabOption field="year" /> },
];

export default function Index() {
    const model = {
        second: '*',
        minute: '*',
        hour: '*',
        day: '*',
        month: '*',
        week: '*',
        year: '*',
    };

    return (
        <Form initialValues={model}>
            <Tabs items={items}></Tabs>
        </Form>
    );
}
