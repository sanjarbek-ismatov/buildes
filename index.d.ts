declare module "esbuilder" {
  declare const builder = (config: {
    input: string;
    bundle: boolean;
    packages: string;
    platform: string;
    minimized: boolean;
    output: string;
  }) => {};
}
