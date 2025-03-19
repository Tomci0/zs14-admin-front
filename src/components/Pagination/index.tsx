import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';

import './style.scss';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

interface PaginationProps {
    pages: number;
    currentPage: number;
    setPage: (page: number) => void;
}

export default function Pagination({ pages, currentPage, setPage }: PaginationProps) {
    const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
    const urlParams = new URLSearchParams(window.location.search);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const page = urlParams.get('page');

        if (!page) {
            navigate(
                {
                    pathname: location.pathname,
                    search: '?page=1&limit=10',
                },
                { replace: true }
            );
        }
    }, []);

    const handlePageClick = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > pages) {
            return;
        }
        // Aktualizacja stanu w komponencie rodzica
        setPage(pageNumber);

        // Aktualizacja URL bez odświeżania strony
        navigate(
            {
                pathname: location.pathname,
                search: `?page=${pageNumber}&limit=10`,
            },
            { replace: false }
        );
    };

    return (
        <div id="pagination">
            <div
                className={'pagination__arrow pagination__arrow--left ' + (currentPage == 1 && 'disabled')}
                onClick={() => handlePageClick(currentPage - 1)}
            >
                <Icon icon="fa-solid:chevron-left" />
            </div>
            <div className="pagination__pages">
                {pageNumbers.map((number) => (
                    <div
                        key={number}
                        className={`pagination__page ${currentPage === number ? 'pagination__page--active' : ''}`}
                        onClick={() => {
                            handlePageClick(number);
                        }}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <div
                className={'pagination__arrow pagination__arrow--right ' + (currentPage == pages && 'disabled')}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                <Icon icon="fa-solid:chevron-right" />
            </div>
        </div>
    );
}
