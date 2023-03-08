module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'kopargaonmaza',
          api_key: '224295759298277',
          api_secret: 'Gg8LLMdZ2rk2GrLY_96yAqVN-no',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });