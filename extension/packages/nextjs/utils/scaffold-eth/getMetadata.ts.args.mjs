export const thumbnailPath = '/opengraph-image.png'

export const metadataOverrides = {
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: '$$imageUrl$$',
      button: {
        title: '$$title$$',
        action: {
          type: 'launch_miniapp',
          name: '$$title$$',
          url: '$$new URL(baseUrl)$$',
          splashImageUrl: '$$new URL(baseUrl)$$/splash.png',
          splashBackgroundColor: '#ffffff',
        },
      },
    }),
  },
}
