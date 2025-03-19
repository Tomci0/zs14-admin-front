import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './style.scss';
import logo from './zs14-logo.png';

import NavItem from './components/NavItem';
import NavCategory from './components/NavCategory';
import useAuth from '../../contexts/useAuth';

import navItems from '../../constants/navItems';

// Warianty animacji dla całego kontenera
const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07, // Opóźnienie między elementami
            delayChildren: 0.2, // Opóźnienie przed rozpoczęciem animacji dzieci
        },
    },
};

// Warianty animacji dla elementów
const itemVariants = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 20,
            mass: 0.8,
        },
    },
};

// Warianty dla logo
const logoVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 15,
        },
    },
};

// Warianty dla stopki
const footerVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.5,
        },
    },
};

export default function Navbar() {
    const { hasPermission } = useAuth();
    const [isScrolling, setIsScrolling] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Obsługa przewijania
    const handleScroll = () => {
        setIsScrolling(true);

        // Resetuj licznik za każdym przewinięciem
        if (scrollTimerRef.current) {
            clearTimeout(scrollTimerRef.current);
        }

        // Ukryj scrollbar po 1 sekundzie nieaktywności
        scrollTimerRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };

    useEffect(() => {
        const menu = menuRef.current;
        if (menu) {
            menu.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (menu) {
                menu.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current);
            }
        };
    }, []);

    const renderNavItems = (items: INavItem[], level = 0) => {
        return items.map((item, index) => {
            if (item.items && item.items.length > 0) {
                return (
                    (!item.permission || hasPermission(item.permission)) && (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            style={{ width: '100%', overflow: 'hidden' }}
                        >
                            <NavCategory key={item.title} label={item.title}>
                                {renderNavItems(item.items, level + 1)}
                            </NavCategory>
                        </motion.div>
                    )
                );
            }

            return (
                (!item.permission || hasPermission(item.permission)) && (
                    <motion.div key={item.title} variants={itemVariants} style={{ width: '100%', overflow: 'hidden' }}>
                        <NavItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            to={item.path}
                            tooltip={item.tooltip}
                        />
                    </motion.div>
                )
            );
        });
    };

    return (
        <div id="navbar" className={isScrolling ? 'scrolling' : ''}>
            <motion.div id="logo" variants={logoVariants} initial="hidden" animate="visible">
                <img src={logo} alt="ZS14 Logo" />
            </motion.div>

            <div className="main-menu-wrapper">
                <motion.div
                    ref={menuRef}
                    className="main-menu"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <NavCategory label="Nawigacja" type="main-menu">
                        {renderNavItems(navItems as INavItem[])}
                    </NavCategory>
                </motion.div>
            </div>

            <motion.div id="footer" variants={footerVariants} initial="hidden" animate="visible">
                <div id="copyright">
                    <span>
                        Copyright &copy; {new Date().getFullYear()} <span id="author">tomcio.space</span> for ZS14
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
