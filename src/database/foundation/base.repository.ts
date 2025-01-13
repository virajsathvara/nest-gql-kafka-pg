import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

interface HasId {
  id?: string;
}

export abstract class BaseAbstractRepository<T extends HasId> {
  readonly repository: Repository<T>;

  protected constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  public async saveOne(data: DeepPartial<T>): Promise<T> {
    return await this.repository.save(data);
  }

  public async saveManyInChunks(
    data: DeepPartial<T>[],
    chunkSize = 500,
  ): Promise<T[]> {
    return this.repository.save(data, { chunk: chunkSize });
  }

  public async findOneById(id: any): Promise<T> {
    const options: FindOptionsWhere<T> = {
      id: id,
    };
    return await this.repository.findOneBy(options);
  }

  public async findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return await this.repository.findOne(filterCondition);
  }

  public async findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(relations);
  }

  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  public async remove(data: T): Promise<T> {
    return await this.repository.remove(data);
  }

  // add other useful common methods here
}
