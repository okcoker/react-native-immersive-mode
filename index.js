import { NativeModules, DeviceEventEmitter } from 'react-native';

const { RNImmersiveMode } = NativeModules;

const checkModule = () => {
    if (!RNImmersiveMode) {
        throw Error('RNImmersiveMode is not properly linked');
    }
}

const parseColorString = (color) => {
    let parsed = color;

    if (typeof color === 'string') {
        if (color.length === 9) {
            // convert #rgba to #argb
            parsed = '#' + color.substr(7, 2) + color.substr(1, 6);
        } else if (color.length === 4) {
            parsed = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        }
    }

    return parsed;
}

const ImmersiveMode = {
    /**
     * @deprecated
     */
    ...RNImmersiveMode, // for constants

    fullLayout(full) {
        checkModule();
        RNImmersiveMode.fullLayout(full);
    },

    /**
     * @deprecated
     */
    setImmersive(mode) {
        checkModule();
        RNImmersiveMode.setImmersive(mode);
    },

    setBarMode(mode) {
        checkModule();
        RNImmersiveMode.setBarMode(mode);
    },

    setBarStyle(style) {
        checkModule();
        RNImmersiveMode.setBarStyle(style);
    },

    setBarTranslucent(enable) {
        checkModule();
        RNImmersiveMode.setBarTranslucent(enable);
    },

    setBarColor(color) {
        checkModule();
        RNImmersiveMode.setBarColor(parseColorString(color));
    },

    setStatusBarColor(color) {
        checkModule();
        RNImmersiveMode.setStatusBarColor(parseColorString(color));
    },

    setNavigationBarColor(color) {
        checkModule();
        RNImmersiveMode.setNavigationBarColor(parseColorString(color));
    },

    addEventListener(callback) {
        checkModule();
        if (typeof callback !== 'function') return;

        RNImmersiveMode.setOnSystemUiVisibilityChangeListener();

        const subscription = DeviceEventEmitter.addListener(
            RNImmersiveMode.OnSystemUiVisibilityChange,
            (e) => callback(e));

        return subscription;
    }
}

export default ImmersiveMode;
