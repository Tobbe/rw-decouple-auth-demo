import { render } from '@redwoodjs/testing/web'

import PrivatePage from './PrivatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivatePage />)
    }).not.toThrow()
  })
})
