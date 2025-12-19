// src/dashboard/data/sideBarLinks.ts
import { TrendingUp, MessageSquare, Calendar, Briefcase } from 'lucide-react';
import type { ElementType } from 'react';


export interface SidebarLink {
label: string;
path: string;
icon: ElementType;
}


export const sidebarLinks: SidebarLink[] = [
{ label: 'Analytics', path: '/dashboard', icon: TrendingUp },
{ label: 'Contact Forms', path: '/dashboard/contact', icon: MessageSquare },
{ label: 'Strategy Sessions', path: '/dashboard/booking', icon: Calendar },
{ label: 'Career Forms', path: '/dashboard/career', icon: Briefcase }
];