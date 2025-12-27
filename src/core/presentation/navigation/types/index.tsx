import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  // 禁用下一行 @typescript-eslint/no-namespace 检查
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    // 禁用下一行 @typescript-eslint/no-empty-interface 检查
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Posts: undefined;
  Post: { id: number };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootScreenNavigationProp<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;
