import {useTheme} from "../../../app/providers/theme/lib/useTheme";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            Toggle Theme
        </Button>
    )
}