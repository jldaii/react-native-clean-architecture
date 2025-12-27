import { instanceToPlain } from "class-transformer";

export default abstract class PayloadDto<ApplicationType> {
  /**
   * @description Maps the domain entity to the infrastructure layer model. This method is used in the constructor.
   * @description 将领域实体映射到基础设施层模型。此方法在构造函数中使用。
   * @param payload
   */
  abstract transform(payload: ApplicationType): unknown;

  constructor(payload: ApplicationType) {
    const props = this.transform(payload);

    Object.assign(this, props);
  }

  toPlain() {
    return instanceToPlain(this, { excludeExtraneousValues: true });
  }
}
