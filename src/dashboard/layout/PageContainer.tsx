import type { ReactNode } from 'react';


interface PageContainerProps {
title?: string;
description?: string;
children: ReactNode;
}


const PageContainer = ({ title, description, children }: PageContainerProps) => {
return (
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-5xl mx-auto">
{title && (
<div className="mb-6">
<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
{description && <p className="text-gray-600 mt-1">{description}</p>}
</div>
)}
{children}
</div>
);
};


export default PageContainer;