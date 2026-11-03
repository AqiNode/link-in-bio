import type { Platform } from '../data'
import { trackOutbound } from '../lib/analytics'
import { ArrowUpRight, PlatformGlyph } from './icons'

export function PlatformGrid({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="platforms">
      {platforms.map((platform) => (
        <a
          key={platform.id}
          className="platform"
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOutbound(`platform:${platform.id}`, platform.url)}
        >
          <span className="platform-glyph" aria-hidden="true">
            <PlatformGlyph name={platform.icon} />
          </span>
          <span className="platform-text">
            <span className="platform-label">{platform.label}</span>
            <span className="platform-handle">{platform.handle}</span>
          </span>
          <span className="platform-action" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  )
}
