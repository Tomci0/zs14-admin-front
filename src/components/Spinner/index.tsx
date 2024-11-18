import React from 'react';

import { Spinner } from 'react-bootstrap';

export default function SpinnerFunction({ size = '1.5rem' }: { size?: string }) {
    return <Spinner animation="border" style={{ width: size, height: size }} />;
}
