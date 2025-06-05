import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithTranslation } from "../../../../shared/utils/renderWithTranslation"

describe('Sidebar test', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Sidebar collapse', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('w-sidebar-collapsed');
    })
})