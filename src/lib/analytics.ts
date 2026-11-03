type TrackProps = Record<string, string>

type AnalyticsWindow = Window & {
  plausible?: (event: string, options?: { props?: TrackProps }) => void
  umami?: { track: (event: string, props?: TrackProps) => void }
  dataLayer?: Record<string, unknown>[]
}

/**
 * Sends a named event to whichever lightweight analytics client is present.
 *
 * Nothing is sent when no provider is installed, so the page stays dependency
 * free. Supported out of the box: Plausible, Umami, and a GTM-style dataLayer.
 * The `aqinode:track` custom event is also dispatched for custom integrations.
 */
export function track(event: string, props: TrackProps = {}) {
  if (typeof window === 'undefined') return

  const analytics = window as AnalyticsWindow

  window.dispatchEvent(
    new CustomEvent('aqinode:track', { detail: { event, ...props } }),
  )

  try {
    analytics.plausible?.(event, { props })
  } catch {
    // A broken analytics tag should never interrupt navigation.
  }

  try {
    analytics.umami?.track(event, props)
  } catch {
    // A broken analytics tag should never interrupt navigation.
  }

  if (Array.isArray(analytics.dataLayer)) {
    analytics.dataLayer.push({ event, ...props })
  }
}

export function trackOutbound(context: string, url: string) {
  track('outbound_click', { context, url })
}
