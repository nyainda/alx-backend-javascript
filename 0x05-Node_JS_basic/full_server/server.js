import express from 'express';
import studentsRoutes from './routes/index';

const app = express();
app.use('/', studentsRoutes);

app.listen(1245);

export default app;
