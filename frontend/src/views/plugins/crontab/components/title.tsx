import React from 'react';
import { Button, Form } from 'antd';

interface TitleProps {
    label: string;
    field: string;
}

export default function Title({ field, label }: TitleProps) {
    const form = Form.useFormInstance();

    const value = Form.useWatch(field, form);

    return (
        <div className="flex flex-col items-center gap-2">
            <p>{label}</p>
            <Button className="w-12 h-12 p-1">{value}</Button>
        </div>
    );
}
