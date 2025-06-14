import Hapi from '@hapi/hapi';
import jurusanRoutes from './routes/jurusanRoutes.js';
import karirRoutes from './routes/karirRoutes.js';

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,      // <-- Gunakan PORT dari Railway
    host: '0.0.0.0',                      // <-- Agar bisa diakses dari internet
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route(jurusanRoutes);
  server.route(karirRoutes);

  await server.start();
  console.log(`🚀 Server berjalan di: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
