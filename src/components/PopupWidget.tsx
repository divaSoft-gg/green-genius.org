import React, { useEffect, useState } from 'react';
import { PopupWidget } from 'react-calendly';

const CustomPopupWidget: React.FC = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const root = document.getElementById('root');
        if (root) {
            setRootElement(root);
        }
    }, []);

    if (!rootElement) {
        return null; 
    }

    return (
        <PopupWidget
            url="https://calendly.com/firas1dahmani"
            rootElement={rootElement}
            text="Click here to schedule!"
            textColor="#ffffff"
            color="#00a2ff"
        />
    );
};

export default CustomPopupWidget;
