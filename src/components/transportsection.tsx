import React from 'react';

function TransportSection({address}: {address: string[] }) {
    return (
        <div>transport for {address.toString()}</div>
    );
}

export default TransportSection;