export const thumbnailPath = '/opengraph-image.png'

export const preContent = `
function buildMiniappEmbed(imageUrl: string, imageRelativePath: string, title: string, baseUrl: string): string {
  return JSON.stringify({
    version: 'next',
    imageUrl: baseUrl + "/feed-preview.png",
    button: {
      title,
      action: {
        type: 'launch_miniapp',
        name: title,
        url: baseUrl,
        splashImageUrl: baseUrl+'/splash.png',
        splashBackgroundColor: '#ffffff',
      },
    },
  });
}
`

export const metadataOverrides = {
  other: {
    'fc:miniapp': `$$buildMiniappEmbed(imageUrl, imageRelativePath, title, baseUrl)$$`,
  },
}
