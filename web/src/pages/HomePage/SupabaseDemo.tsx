import { useSupabaseAuth } from 'src/auth'

export const SupabaseDemo = () => {
  const { logIn, logOut, isAuthenticated, userMetadata, currentUser } =
    useSupabaseAuth()

  return (
    <section className="auth-demo-container" style={{ borderColor: 'black' }}>
      <h1>Supabase</h1>
      {!isAuthenticated ? (
        <button
          onClick={() => {
            console.log('logIn')
            logIn({ email: 'coach38@example.com', password: 'testtest' }).then(
              async (data) => {
                console.log('Logged in', data)
              }
            )
          }}
        >
          Log in
        </button>
      ) : (
        <button
          onClick={() => {
            logOut().then(() => {
              console.log('Logged out from Supabase')
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
