export interface ControllerInterface {
  findAll(query: any, req: any): Promise<any>;
  create(body: any, req?: any): Promise<any>;
  findOne(id: string, req?: any): Promise<any>;
  update(id: string, body?: any, req?: any): Promise<any>;
  remove(id: string, req?: any): Promise<any>;
}
