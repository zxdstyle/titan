import React from 'react';
import { FaCog, FaCubes, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

export default function Index() {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar} style={{ '--wails-draggable': 'drag' }}>
            <ul>
                <li className={styles.active} onClick={() => navigate('/')}>
                    <FaHome size={26} />
                </li>
                <li>
                    <FaCubes size={26} />
                </li>
                <li>
                    <FaCog size={26} />
                </li>
            </ul>
        </div>
    );
}
