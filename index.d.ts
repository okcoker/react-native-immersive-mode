import { EmitterSubscription } from 'react-native'

/**
 * @deprecated
 */
type ImmersiveModeType = {
    Normal: number,
    Full: number,
    FullSticky: number,
    Bottom: number,
    BottomSticky: number,
}

type BarViisibilityType = {
    statusBar: boolean,
    navigationBottomBar: boolean
}

type ImmersiveBarStyleType = 'Dark' | 'Light';
type ImmersiveBarModeType =
    'Normal' |
    'Full' |
    'FullSticky' |
    'Bottom' |
    'BottomSticky'


interface ImmersiveModeStatic extends ImmersiveModeType {
    fullLayout(full: boolean): void;

    /**
     * Set system ui mode.
     * @param mode
     *
     * @deprecated use `setBarMode` instaead.
     */
    setImmersive(mode: ImmersiveModeType): void;

    /**
     * Set system ui mode.
     * @param mode
     */
    setBarMode(mode: ImmersiveBarModeType): void;

    /**
     * Set color of system bar.
     * When set color translucent will be disabled.
     *
     * @param color color hex #rrggbbaa. if color is null will set default color
     */
    setBarColor(color: string): void;

    /**
     * Set color of status bar.
     * When set color translucent will be disabled.
     *
     * @param color color hex #rrggbbaa. if color is null will set default color
     */
    setStatusBarColor(color: string): void;

    /**
     * Set color of navigation bar.
     * When set color translucent will be disabled.
     *
     * @param color color hex #rrggbbaa. if color is null will set default color
     */
    setNavigationBarColor(color: string): void;

    /**
     * Set style of system bar.
     * System Navigation will be Light, must be change bar color `setBarColor` to other color first.
     *
     * @param style
     */
    setBarStyle(style: ImmersiveBarStyleType): void;

    /**
     * System bar background color is transparent 50%.
     * When `true` bar color will be disabled.
     *
     * @param enable
     */
    setBarTranslucent(enable: boolean): void;

    addEventListener(callback: (viisibility: BarViisibilityType) => void): EmitterSubscription;
}

declare const ImmersiveMode: ImmersiveModeStatic;
export default ImmersiveMode;
