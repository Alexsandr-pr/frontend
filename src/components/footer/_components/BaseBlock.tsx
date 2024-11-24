import React, { ReactNode } from 'react'

const BaseBlock = ({
    children,
    title
} : {
    children: ReactNode;
    title: string;
}) => {

    return (
        <div className="footer-content__item footer-item gap-1">
            <h3 className="footer-item__title footer-title">
                {title}
            </h3>
            {children}
        </div>
    )
}

export default BaseBlock