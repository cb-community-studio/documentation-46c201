import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CodeSnip = ({ code }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopySuccess(true);
    };

    return (
        <Card>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h5 style={{ flex: 1, margin: 0 }}>Code Example</h5>
                <Button
                    icon="pi pi-copy"
                    label={copySuccess ? 'Copied' : 'Copy'}
                    onClick={copyCodeToClipboard}
                    className="p-button-secondary p-button-text"
                />
            </div>
            <pre>{code}</pre>
        </Card>
    );
};

export default CodeSnip;
