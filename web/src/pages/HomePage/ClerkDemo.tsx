import { useClerkAuth } from 'src/auth'

export const ClerkDemo = () => {
  const { logIn, logOut, isAuthenticated, userMetadata, currentUser } =
    useClerkAuth()

  return (
    <section
      className="auth-demo-container"
      style={{
        borderColor: 'blue',
      }}
    >
      <h1>Clerk</h1>
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
              console.log('Logged out from Clerk')
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
