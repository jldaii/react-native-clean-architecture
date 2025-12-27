declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// 如果此文件没有导入/导出语句（即是一个脚本）
// convert it into a module by adding an empty export statement.
// 通过添加一个空的导出语句将其转换为模块。
export {};
