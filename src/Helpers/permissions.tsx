import { Platform } from 'react-native';
import { RESULTS, request, PERMISSIONS } from 'react-native-permissions';

export const checkContactsPermission = async () => {
  try {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await request(PERMISSIONS.ANDROID.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      });
    } else if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.CONTACTS);
    }
    console.log('Permission: ', permissionStatus);
    return permissionStatus === RESULTS.GRANTED;
  } catch (error) {
    console.error('Permission error: ', error);
    return false;
  }
};
