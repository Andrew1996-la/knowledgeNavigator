import { EThemeType } from '../../../app/providers/theme/lib/ThemeContext';
import { useTheme } from '../../../app/providers/theme/lib/useTheme';
import Dark from '../../../shared/assets/icon/dark.svg';
import Light from '../../../shared/assets/icon/light.svg';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === EThemeType.Light ? (
                <Light width={50} height={50} />
            ) : (
                <Dark width={50} height={50} />
            )}
        </Button>
    );
};
