export const Beacon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Beacon">
        <circle cx="14" cy="16" r="6" />
        <circle cx="14" cy="16" r="12" fillOpacity="0.3" />
        <text x="32" y="22" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700">Beacon</text>
    </svg>
)
