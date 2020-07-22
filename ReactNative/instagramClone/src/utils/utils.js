import { Platform,Dimensions } from 'react-native';

export const defineIOSValue = (ios, android) => {
    return Platform.OS === 'ios' ? ios : android
}

export const getWidth = () => {
    return Dimensions.get('window').width
}
export const getHeigth = () => {
    return Dimensions.get('window').height
}