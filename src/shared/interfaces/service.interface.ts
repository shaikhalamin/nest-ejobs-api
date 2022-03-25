export interface ServiceInterface {
  findAll(query?: any, req?: any): Promise<any>;
  create(body: any, req?: any): Promise<any>;
  findOne(id: number, req?: any): Promise<any>;
  update(id: number, body?: any, req?: any): Promise<any>;
  remove(id: number, req?: any): Promise<any>;
}
