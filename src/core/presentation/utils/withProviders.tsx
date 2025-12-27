/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any - 禁用显式 any 类型检查 */
import React, { ComponentType, PropsWithChildren } from "react";

export const withProviders =
  (
    ...providers: (
      | ComponentType<PropsWithChildren>
      | [ComponentType<PropsWithChildren>, Record<string, unknown>]
    )[]
  ) =>
  (WrappedComponent: ComponentType | ((props: any) => JSX.Element)) =>
  (props: Record<string, unknown>) =>
    providers.reduceRight((acc, prov) => {
      const Provider = Array.isArray(prov) ? prov[0] : prov;
      const providerProps = Array.isArray(prov) ? prov[1] : {};

      return <Provider {...providerProps}>{acc}</Provider>;
    }, <WrappedComponent {...props} />);
