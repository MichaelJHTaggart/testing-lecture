import { faItalic } from "@fortawesome/free-solid-svg-icons"
import { fireEvent } from "@testing-library/react"

describe('Header tests', () => {
    test('Does not show dropdown when mounted', () => {
        const tools = render(<Header />)
        const { queryByTestId } = tools
        const dropdown = queryByTestId('dropdown')
        expect(dropdown).not.toBeTruthy()
    })

    test('Shows dropdown when hamburger is clicked', () => {
        const { container, getByTestId } = render(<Header />)

        const hamburger = getByTestId('hamburger-button')

        fireEvent.click(hamburger)

        expect(container.textContent).toContain('Dropdown menu')
    })

})