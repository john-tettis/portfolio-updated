import React, { useState } from 'react';
import '../../styles/NDABubble.css';

const NDABubble = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <span
            className="nda-bubble"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="NDA Notice"
        >NDA
        
            {showTooltip && (
                <span className="nda-tooltip">
                    Signed NDA: Details of this work are confidential
                </span>
            )}
        </span>
    );
};

export default NDABubble;
