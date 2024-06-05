import { Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('http://localhost/v1') //  endpoint
  .setProject('quranfoundationevents'); // project ID

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
