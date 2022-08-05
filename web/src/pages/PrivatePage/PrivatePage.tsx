import { NavLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrivatePage = () => {
  return (
    <>
      <MetaTags title="Private" description="Private page" />

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
      <section style={{ padding: '20px' }}>
        <h2>PrivatePage</h2>
        <p>
          Find me in <code>./web/src/pages/PrivatePage/PrivatePage.tsx</code>
        </p>
        <p>This page is top-secret</p>
      </section>
    </>
  )
}

export default PrivatePage
