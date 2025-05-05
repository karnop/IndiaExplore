import React from 'react';



function Itenraryform({address}: {address: string[] }) {
    return (
        <div>Form for {address.toString()}</div>
    );
}

export default Itenraryform;