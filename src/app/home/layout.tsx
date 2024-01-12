import { Inter } from 'next/font/google'
import classnames from 'classnames';

const inter = Inter({ subsets: ['latin'], })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={classnames(inter.className, "bg-red-800")}>{children}</div>
  )
}
