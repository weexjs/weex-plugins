//
//  WeexNatDeviceBase.m
//
//  Created by huangyake on 17/1/7.
//  Copyright © 2017 Nat. All rights reserved.
//

#import "WeexNatDeviceBase.h"
#import "NatDeviceBase.h"

@implementation WeexNatDeviceBase
WX_EXPORT_METHOD(@selector(info:))


- (void)info:(WXModuleCallback)callback{
    [[NatDeviceBase singletonManger] info:^(id error, id result) {
        if (error) {
            if (callback) {
                callback(error);
            }
        }else{
            if (callback) {
                callback(result);
            }
        }
    }];
}

@end
