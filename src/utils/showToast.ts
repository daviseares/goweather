import Toast from 'react-native-root-toast';

interface Params {
  msg: string;
  duration?: number;
}

/**
 * show toast message
 */
export function showToast({ msg, duration = 1500 }: Params): void {
  Toast.show(msg, {
    duration,
    position: Toast.positions.BOTTOM + 10,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}
