export default function Camera({color}) {
    return (
        <svg width="56px" height="56px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_15_137)">
                <rect width="24" height="24" fill="none" />
                <path d="M3 8C3 7.44772 3.44772 7 4 7H8.5L9.5 4H14.5L15.5 7H20C20.5523 7 21 7.44772 21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="3" stroke={color} strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_15_137">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
