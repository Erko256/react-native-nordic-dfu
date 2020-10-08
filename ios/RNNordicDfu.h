#import <CoreBluetooth/CoreBluetooth.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
@import iOSDFULibrary;

@interface RNNordicDfu : RCTEventEmitter<RCTBridgeModule, DFUServiceDelegate, DFUProgressDelegate, LoggerDelegate>

@property (strong, nonatomic) NSString * deviceAddress;
@property (strong, nonatomic) RCTPromiseResolveBlock resolve;
@property (strong, nonatomic) RCTPromiseRejectBlock reject;

@property (strong, nonatomic) DFUServiceController * controller;

+ (void)setCentralManagerGetter:(CBCentralManager * (^)())getter;
+ (void)setOnDFUComplete:(void (^)())onComplete;
+ (void)setOnDFUError:(void (^)())onError;

@end
