import type { PlatformIcon, ProductIcon } from '../data'

type IconProps = {
  size?: number
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
} as const

export function ProductGlyph({
  name,
  size = 22,
}: IconProps & { name: ProductIcon }) {
  if (name === 'plorpy') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        {...strokeProps}
      >
        <path d="M12 2.75 21 7.5 12 12.25 3 7.5 12 2.75Z" />
        <path d="m3 12.25 9 4.75 9-4.75" />
        <path d="m3 17 9 4.75L21 17" />
      </svg>
    )
  }

  if (name === 'pingix') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        {...strokeProps}
      >
        <path d="M3.5 8.5V4.5a1 1 0 0 1 1-1h4M15.5 3.5h4a1 1 0 0 1 1 1v4M20.5 15.5v4a1 1 0 0 1-1 1h-4M8.5 20.5h-4a1 1 0 0 1-1-1v-4" />
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
    >
      <path d="M3.5 3.5h17v17h-17z" />
      <path d="M3.5 10h17M10 3.5v17" />
      <circle cx="16.25" cy="16.25" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArrowUpRight({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
    >
      <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
    </svg>
  )
}

export function PlatformGlyph({
  name,
  size = 18,
}: IconProps & { name: PlatformIcon }) {
  if (name === 'x') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 9h16.4M3.8 15h16.4" />
      <path d="M12 3.5a13.2 13.2 0 0 1 0 17 13.2 13.2 0 0 1 0-17Z" />
    </svg>
  )
}
