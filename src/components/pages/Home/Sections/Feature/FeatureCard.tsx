import React from 'react';
import { FeatureCardProps } from '../../../../../helpers/types';

const FeatureCard : React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold  text-center">{title}</h3>
            <p className="text-gray-500  text-center">{description}</p>
        </div>
    );
}

export default FeatureCard;