import React, { useRef, useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';

export default function StatisticCard({
    title,
    icon,
    value,
    href,
}: {
    title: string;
    icon: string;
    value: string;
    href?: string;
}) {
    const valueRef = useRef<HTMLDivElement>(null);
    const [isOverflowed, setIsOverflowed] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (valueRef.current) {
                setIsOverflowed(valueRef.current.scrollWidth > valueRef.current.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    return (
        <div className="statistic-card">
            <div className={`content ${href ? 'has-footer-btn' : ''}`}>
                <div className="left">
                    <div className="icon">
                        <Icon icon={icon} />
                    </div>
                </div>
                <div className="right">
                    <div className="content-text">
                        <div className="title">{title}</div>

                        {isOverflowed && (
                            <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="bottom"
                                overlay={<Tooltip id="tooltip-value">{value}</Tooltip>}
                            >
                                <div
                                    className="value"
                                    ref={valueRef}
                                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                >
                                    {value}
                                </div>
                            </OverlayTrigger>
                        )}

                        {!isOverflowed && (
                            <div
                                className="value"
                                ref={valueRef}
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >
                                {value}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {href && (
                <Link to={href} className="footer-btn">
                    Zobacz
                </Link>
            )}
        </div>
    );
}
