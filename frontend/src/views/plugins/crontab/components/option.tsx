import React, { useEffect, useMemo, useState } from 'react';
import { InputNumber, Radio, Slider } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';

interface OptionProps {
    value?: string;
    onChange?: (value: string) => void;
}

type OptionType = 'any' | 'range' | 'gap' | 'static';

export default function Option({ value, onChange }: OptionProps) {
    const [optionType, setOptionType] = useState<OptionType>('any');
    useEffect(() => {
        if (!value || value === '*') {
            setOptionType('any');
            return;
        }
        if (value.indexOf('-') !== -1) {
            setOptionType('range');
            return;
        }
        if (value.indexOf('/') !== -1) {
            setOptionType('gap');
            return;
        }
        if (value.length > 0 && value !== '*') {
            setOptionType('static');
            return;
        }
    }, [value]);

    const handleChange = (e: RadioChangeEvent) => {
        setOptionType(e.target.value);
        if (e.target.value === 'any') {
            onChange && onChange('*');
            return;
        }
        if (e.target.value === 'range' && !Array.isArray(value)) {
            onChange && onChange('0-59');
            return;
        }
        if (e.target.value === 'gap' && value?.indexOf('/') === -1) {
            onChange && onChange('1/5');
            return;
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <Radio.Group value={optionType} optionType="button" buttonStyle="solid" size="large" onChange={handleChange}>
                <Radio value="any">任意值</Radio>
                <Radio value="range">范围</Radio>
                <Radio value="gap">间隔</Radio>
                <Radio value="static">指定值</Radio>
            </Radio.Group>

            {optionType === 'range' && <RangeSlider onChange={onChange} value={value} />}
            {optionType === 'gap' && <Gap onChange={onChange} value={value} />}
        </div>
    );
}

interface RangeSliderProps extends OptionProps {
    children?: React.ReactNode;
}
function RangeSlider({ onChange }: RangeSliderProps) {
    return <Slider range min={0} max={59} onChange={val => onChange && onChange(val.join('-'))} />;
}

interface GapProps extends OptionProps {
    children?: React.ReactNode;
}
function Gap({ onChange, value }: GapProps) {
    const start = useMemo(() => {
        if (!value) {
            return 0;
        }
        const val = value.split('/');
        return Number(val[0]);
    }, [value]);
    const end = useMemo(() => {
        if (!value) {
            return 0;
        }
        const val = value.split('/');
        return Number(val[1]);
    }, [value]);

    const handleStartChange = (s: number | null) => {
        if (!s) return;
        if (!value) {
            return `${s}/0`;
        }
        const val = value.split('/');
        onChange && onChange(`${s}/${val[1]}`);
    };

    const handleEndChange = (s: number | null) => {
        if (!s) return;
        if (!value) {
            return `0/${s}`;
        }
        const val = value.split('/');
        onChange && onChange(`${val[0]}/${s}`);
    };

    return (
        <div className="flex gap-2 items-center">
            <span>间隔</span>
            <InputNumber min={0} max={59} value={start} onChange={handleStartChange} />
            <span>秒开始，每</span>
            <InputNumber min={0} max={59} value={end} onChange={handleEndChange} />
            <span>秒执行一次</span>
        </div>
    );
}
