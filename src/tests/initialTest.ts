import request from 'supertest';
import express from 'express';
import nodeTelescope from '../index';
import { Express } from 'express';

describe('Node Telescope', () => {
  let app : Express;

  beforeEach(() => {
    app = express();
    nodeTelescope(app);
  });

  it('should log HTTP requests', async () => {
    await request(app).get('/');
  });
});