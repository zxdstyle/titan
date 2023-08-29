import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { BsFiletypeJson } from 'react-icons/bs';
import Tooltip from 'antd/es/tooltip';
import { Dropdown, MenuProps } from 'antd';

export default function Index() {
    return (
        <div className="absolute right-0 h-full bg-indigo-950 top-0 flex flex-col p-5 gap-3">
            <QuickLink page="/plugins/json-pretty" icon={<BsFiletypeJson size={22} />} title="JSON 格式化" />
            <QuickLink page="/plugins/json2struct" icon={<BsFiletypeJson size={22} />} title="JSON 转 Go Struct" />
        </div>
    );
}

const items: MenuProps['items'] = [{ label: '从菜单移除', key: 'remove' }];
function QuickLink({ page, icon, title }: { page: string; icon?: React.ReactNode; title: React.ReactNode }) {
    const navigate = useNavigate();

    return (
        <Tooltip title={title} placement="left">
            <Dropdown trigger={['contextMenu']} menu={{ items }} placement="bottomLeft">
                <button className="w-11 h-11 rounded-xl bg-blue-500 cursor-pointer active:scale-90 transition-all flex items-center justify-center" onClick={() => navigate(page)}>
                    {icon}
                </button>
            </Dropdown>
        </Tooltip>
    );
}
