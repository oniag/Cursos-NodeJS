const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        db_string: 'mongodb://localhost:27017/mongotcc',
        secret_password: 'b90f6326a35615f0c78ad69953b26faf',
        token_expire: '1d'
    }
    case 'hml':
      return {
        db_string: 'mongodb://localhost:27017/mongotcc',
        secret_password: 'b90f6326a35615f0c78ad69953b26faf',
        token_expire: '1d'
      }
    case 'prod':
      return {
        db_string: 'mongodb://localhost:27017/mongotcc',
        secret_password: 'b90f6326a35615f0c78ad69953b26faf',
        token_expire: '1d'
      }
  }
}
// console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();