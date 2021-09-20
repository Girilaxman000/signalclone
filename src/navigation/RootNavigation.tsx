import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();
export const drawerNavigationRef = React.createRef()

export function navigate(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export function navigation(Screen: string) {
    throw new Error('Function not implemented.');
}
