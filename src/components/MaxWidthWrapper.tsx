import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  id,
  className,
  children,
}: {
  id?:string
  className?: string
  children: ReactNode
}) => {
  return (
    <div id={id}
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl lg:px-2.5 px-[30px] md:px-20',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
