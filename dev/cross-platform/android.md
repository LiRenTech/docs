# Android 应用开发

## Tauri 应用签名

1. 在 QQ 群文件内下载 `keystore.jks` 和 `keystore.properties` 文件
2. 把 `keystore.properties` 文件放到 `./src-tauri/gen/android/keystore.properties`
3. 把 `keystore.jks` 文件放到任意位置，建议放在家目录下
4. 修改 `keystore.properties` 文件，将 `storeFile` 改为 `keystore.jks` 的绝对路径
