import Hapi from '@hapi/hapi';
import jurusanRoutes from './routes/jurusanRoutes.js';
import karirRoutes from './routes/karirRoutes.js';

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'] // agar frontend bisa fetch
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
