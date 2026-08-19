// Affiliate Integration Configuration
// Replace these markers with your actual IDs from Travelpayouts or direct partner programs.

export const AFFILIATE_CONFIG = {
  // Your Travelpayouts Marker (extracted from your Drive script)
  travelpayoutsMarker: '563600',
  
  // Direct program IDs if you are not using Travelpayouts for everything
  bookingAid: 'YOUR_BOOKING_AID',
  getYourGuidePartnerId: 'YOUR_GYG_ID',
};

// Helper function to generate tracked links
export function getAffiliateLink(provider: string, defaultHref?: string): string {
  // Since we are using the Travelpayouts Drive script in the <head>,
  // we no longer need to manually construct affiliate URLs.
  // The Drive script will automatically convert standard domains into affiliate links.
  return defaultHref || '#';
}
