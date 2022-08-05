import { useNetlifyAuth } from 'src/auth'

export const NetlifyDemo = () => {
  const { logIn, logOut, isAuthenticated, userMetadata, currentUser } =
    useNetlifyAuth()

  return (
    <section
      className="auth-demo-container"
      style={{
        borderColor: 'green',
      }}
    >
      <h1>Netlify</h1>
      {!isAuthenticated ? (
        <button
          onClick={() => {
            console.log('logIn')
            logIn().then(async (data) => {
              console.log('Logged in', data)
            })
          }}
        >
          Log in
        </button>
      ) : (
        <button
          onClick={() => {
            logOut().then(() => {
              console.log('logged out from Netlify')
            })
          }}
        >
          Log out
        </button>
      )}

      <h2>userMetadata</h2>
      <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
      <h2>currentUser</h2>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </section>
  )
}
