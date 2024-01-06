import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Profile from '../dashboard/profile/page'

describe('Profile',() => {
  it('renders a heading', () => {
    render(<Profile />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})

