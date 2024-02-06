const path = require('path');

module.exports = {
  // Diğer Webpack ayarları...
  
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
      // Diğer fallback ayarları buraya eklenir...
    }
  },

  // Diğer Webpack ayarları...
};
