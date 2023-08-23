import React from 'react';
import { Input, Tab, Tabs, RadioGroup, Radio } from '@nextui-org/react';

function SecondTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>秒</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function MinuteTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>分钟</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function HourTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>小时</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function DayTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>日</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function MonthTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>月</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function WeekTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>周</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}
function YearTitle() {
	return (
		<div className="flex flex-col items-center gap-2">
			<p>年</p>
			<Input className="w-12 h-12" disabled></Input>
		</div>
	);
}

export default function Index() {
	return (
		<div>
			<Tabs variant="underlined" size="lg">
				<Tab className="h-24" title={<SecondTitle />}>
					<Option />
				</Tab>
				<Tab className="h-24" title={<MinuteTitle />}>
					分钟
				</Tab>
				<Tab className="h-24" title={<HourTitle />}>
					小时
				</Tab>
				<Tab className="h-24" title={<DayTitle />}>
					日
				</Tab>
				<Tab className="h-24" title={<MonthTitle />}>
					月
				</Tab>
				<Tab className="h-24" title={<WeekTitle />}>
					周
				</Tab>
				<Tab className="h-24" title={<YearTitle />}>
					年
				</Tab>
			</Tabs>
		</div>
	);
}

function Option() {
	return (
		<RadioGroup label="Select your favorite city" orientation="horizontal">
			<Radio value="buenos-aires">任意值</Radio>
			<Radio value="sydney">范围</Radio>
			<Radio value="san-francisco">间隔</Radio>
			<Radio value="london">指定值</Radio>
		</RadioGroup>
	);
}
