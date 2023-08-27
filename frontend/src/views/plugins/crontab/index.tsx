import React, { useEffect } from 'react';
import { Tabs, TabsProps, Form } from 'antd';
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
    {
        key: 'minute',
        label: <CrontabTitle label="分" field="minute" />,
        children: (
            <Form.Item name="minute">
                <CrontabOption />
            </Form.Item>
        ),
    },
    {
        key: 'hour',
        label: <CrontabTitle label="小时" field="hour" />,
        children: (
            <Form.Item name="hour">
                <CrontabOption />
            </Form.Item>
        ),
    },
    {
        key: 'day',
        label: <CrontabTitle label="日" field="hour" />,
        children: (
            <Form.Item name="day">
                <CrontabOption />
            </Form.Item>
        ),
    },
    {
        key: 'month',
        label: <CrontabTitle label="月" field="month" />,
        children: (
            <Form.Item name="month">
                <CrontabOption />
            </Form.Item>
        ),
    },
    {
        key: 'week',
        label: <CrontabTitle label="周" field="week" />,
        children: (
            <Form.Item name="week">
                <CrontabOption />
            </Form.Item>
        ),
    },
    {
        key: 'year',
        label: <CrontabTitle label="年" field="year" />,
        children: (
            <Form.Item name="year">
                <CrontabOption />
            </Form.Item>
        ),
    },
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
    const [form] = Form.useForm();
    return (
        <div className="container">
            <Form form={form} initialValues={model}>
                <Tabs items={items}></Tabs>
            </Form>
        </div>
    );
}
