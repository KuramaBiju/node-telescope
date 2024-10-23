import mongoose from 'mongoose';

const initDatabaseMonitoring = () => {
  // Monitorear las consultas de MongoDB
  mongoose.set('debug', (collectionName: string, method: string, query: any, doc: any) => {
    console.log(`[MongoDB] ${collectionName}.${method}`, JSON.stringify(query), doc);
  });

  console.log('Database monitoring initialized for MongoDB');
};

export = initDatabaseMonitoring; 