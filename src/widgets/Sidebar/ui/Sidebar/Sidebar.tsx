import {useState} from "react";
import clsx from "clsx";
import {ThemeSwitcher} from "../../../ThemeSwitcher";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <aside className={clsx(
            'h-sidebar relative text-dark-text bg-light-invertedBackground',
            'dark:bg-dark-invertedBackground dark:text-light-text',
            'transition-width duration-300 ',
            collapsed ? 'w-sidebar-collapsed' : 'w-sidebar'
        )}>
            <button onClick={toggleCollapse}>toggle</button>
            <div className='absolute bottom-5 flex justify-center w-full'>
                <ThemeSwitcher/>
                {/* тут будет переключатель языка */}
            </div>
        </aside>
    )
}