import React from 'react';
import { FaTimes, FaMinus, FaSort } from 'react-icons/fa';
import styles from './style.module.css';
import { WindowToggleMaximise, WindowMinimise, Quit } from '~/wailsjs/runtime';

export default function Index() {
    return (
        <ul className={styles.operateBar}>
            <li className="bg-red-600" onClick={() => Quit()}>
                <FaTimes size={10} />
            </li>
            <li className="bg-yellow-500" onClick={() => WindowMinimise()}>
                <FaMinus size={10} />
            </li>
            <li className="bg-green-600" onClick={() => WindowToggleMaximise()}>
                <FaSort size={12} className="-rotate-45" />
            </li>
        </ul>
    );
}
