import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/patchup-logo-blue.svg"
            alt="PatchUp"
            className={cn('h-10 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <img
            src="/patchup-logo-blue.svg"
            alt="PatchUp"
            className={cn('h-10 w-auto', className)}
        />
    )
}
