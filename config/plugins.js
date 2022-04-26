module.exports = ({env}) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: env('STORAGE_ACCOUNT'),
      accountKey: env('STORAGE_ACCOUNT_KEY'),
      serviceBaseURL: env('STORAGE_URL'),
      containerName: env('STORAGE_CONTAINER_NAME'),
      cdnBaseURL: env('STORAGE_CDN_URL'),
      defaultPath: 'assets',
      maxConcurrent: 10,
    },
  },
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 10000,
    apolloServer: {
      tracing: false,
    },
  },
})
