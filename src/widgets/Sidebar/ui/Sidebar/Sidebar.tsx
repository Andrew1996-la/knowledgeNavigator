import clsx from 'clsx';
import { useState } from 'react';
import { LangSwitcher } from '../../../LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={clsx(
                'h-sidebar relative text-dark-text bg-light-invertedBackground',
                'dark:bg-dark-invertedBackground dark:text-light-text',
                'transition-width duration-300 ',
                collapsed ? 'w-sidebar-collapsed' : 'w-sidebar'
            )}
        >
            <button onClick={toggleCollapse}>toggle</button>
            <div className='absolute bottom-5 flex justify-center w-full gap-2 flex-wrap'>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
};
