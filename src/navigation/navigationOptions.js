import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';
import {assets} from '../common/theme';
import { Image, TouchableOpacity, View } from 'react-native';

export const rootNavigationRef = createNavigationContainerRef();

export const hideHeaderOptions = {
  headerShown: false,
};

export const defaultOptions = {
  headerShadowVisible: false,
};
