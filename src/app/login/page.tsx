import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <main>
      <p className='subtitle'>We're still brewing this feature. Our login page is coming soon!</p>
      <div className='buttons'><Link href="/#">Back to Home</Link></div>
    </main>
  )
}

export default page