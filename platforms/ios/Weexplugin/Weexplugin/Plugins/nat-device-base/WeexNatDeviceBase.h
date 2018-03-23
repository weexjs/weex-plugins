//
//  WeexNatDeviceBase.h
//
//  Created by huangyake on 17/1/7.
//  Copyright © 2017 Nat. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>


@protocol WeexNatDeviceBasePro <WXModuleProtocol>

- (void)info:(WXModuleCallback)callback;

@end

@interface WeexNatDeviceBase : NSObject<WeexNatDeviceBasePro>

@end
