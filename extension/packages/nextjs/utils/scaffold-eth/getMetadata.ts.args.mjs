export const thumbnailPath = '/opengraph-image.png'

export const metadataOverrides = {
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl,
      button: {
        title,
        action: {
          type: 'launch_miniapp',
          name: title,
          url: baseUrl,
          splashImageUrl: `${baseUrl}/splash.png`,
          splashBackgroundColor: '#ffffff',
        },
      },
    }),
  },
}
