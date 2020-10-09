declare module 'react-native-nordic-dfu' {
  export class NordicDFU {
    static startDFU({
      deviceAddress,
      deviceName,
      filePath,
      alternativeAdvertisingNameEnabled
    }: {
      deviceAddress: string;
      deviceName?: string;
      filePath: string | null;
      alternativeAdvertisingNameEnabled?: boolean;
    }): Promise<string>;

    static abortDFU({
      deviceAddress
    }: {
      deviceAddress: string;
    }): Promise<string>;

    static pauseDFU({
      deviceAddress
    }: {
      deviceAddress: string;
    }): Promise<string>;

    static resumeDFU({
      deviceAddress
    }: {
      deviceAddress: string;
    }): Promise<string>;

    static restartDFU({
      deviceAddress
    }: {
      deviceAddress: string;
    }): Promise<string>;
  }

  export interface IDfuUpdate {
    percent?: number;
    currentPart?: number;
    partsTotal?: number;
    avgSpeed?: number;
    speed?: number;
    state?: string;
  }

  export class DFUEmitter {
    static addListener(
      name: 'DFUProgress' | 'DFUStateChanged',
      handler: (update: IDfuUpdate) => void
    ): void;

    static removeAllListeners(name: 'DFUProgress' | 'DFUStateChanged'): void;
  }
}
