// app/dashboard/page.tsx
import { Suspense } from 'react'
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div>feed area</div>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
      <div>weather area</div>
      </Suspense>
    </section>
  )
}