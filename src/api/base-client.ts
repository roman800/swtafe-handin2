export class BaseClient {
  public async transformOptions(options: any): Promise<any> {
    const token = localStorage.getItem('token');
    const headerData = token
      ? {
          ...options.headers,
          Authorization: 'Bearer ' + token,
        }
      : {
          ...options.headers,
        };
    return Object.assign({}, options, {
      headers: headerData,
    });
  }
}