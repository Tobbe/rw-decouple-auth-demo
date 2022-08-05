import { NavLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { ClerkDemo } from './ClerkDemo'
import { NetlifyDemo } from './NetlifyDemo'
import { SupabaseDemo } from './SupabaseDemo'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Decoupled Auth - Multi Provider Demo</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.home()} activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.private()} activeClassName="active-link">
              Private
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex' }}>
        <SupabaseDemo />
        <NetlifyDemo />
        <ClerkDemo />
      </div>
    </>
  )
}

export default HomePage
