/* eslint-disable @typescript-eslint/no-explicit-any */
/* 禁用显式 any 类型检查 */
export interface UseCase<
  PayloadType = void,
  ResponseType extends Promise<any> = Promise<void>
> {
  execute(payload: PayloadType): ResponseType;
}
