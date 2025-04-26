'use client';

import { useUserStore } from '@/store/use-user'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
  const { isAuthenticated } = useUserStore()

  if (!isAuthenticated) {
    redirect("/login")
  }

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage
