import { useEffect } from 'react'

import { ClerkLoaded, ClerkProvider, useUser } from '@clerk/clerk-react'
import { createClient } from '@supabase/supabase-js'
import netlifyIdentity from 'netlify-identity-widget'

import {
  createSupabaseAuth,
  createNetlifyAuth,
  createClerkAuth,
} from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

netlifyIdentity.init()

export const { AuthProvider: SupabaseAuthProvider, useAuth: useSupabaseAuth } =
  createSupabaseAuth(supabaseClient)

export const { AuthProvider: NetlifyAuthProvider, useAuth: useNetlifyAuth } =
  createNetlifyAuth(netlifyIdentity)

export const { AuthProvider: ClerkRwAuthProvider, useAuth: useClerkAuth } =
  createClerkAuth()

interface Props {
  children: React.ReactNode
}

const ClerkStatusUpdater = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const { reauthenticate } = useClerkAuth()

  useEffect(() => {
    if (isLoaded) {
      reauthenticate()
    }
  }, [isSignedIn, user, reauthenticate, isLoaded])

  return null
}

const ClerkAuthProvider = ({ children }: Props) => {
  const frontendApi = process.env.CLERK_FRONTEND_API_URL
  if (!frontendApi) {
    throw new Error('Need to define env variable CLERK_FRONTEND_API_URL')
  }

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <ClerkRwAuthProvider>
        <ClerkLoaded>{children}</ClerkLoaded>
        <ClerkStatusUpdater />
      </ClerkRwAuthProvider>
    </ClerkProvider>
  )
}

export const AuthProvider = ({ children }: Props) => {
  return (
    <ClerkAuthProvider>
      <SupabaseAuthProvider>
        <NetlifyAuthProvider>{children}</NetlifyAuthProvider>
      </SupabaseAuthProvider>
    </ClerkAuthProvider>
  )
}

export const useAuth = () => {
  const supabaseAuth = useSupabaseAuth()
  const netlifyAuth = useNetlifyAuth()
  const clerkAuth = useClerkAuth()

  if (supabaseAuth.isAuthenticated) {
    return supabaseAuth
  } else if (netlifyAuth.isAuthenticated) {
    return netlifyAuth
  } else {
    return clerkAuth
  }
}
