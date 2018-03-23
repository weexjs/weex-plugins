//
//  WeexNatTransfer.h
//
//  Created by huangyake on 17/1/7.
//  Copyright © 2017 Instapp. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <WeexSDK/WeexSDK.h>


@protocol WeexNatTransferPro <WXModuleProtocol>
- (void)download:(NSDictionary *)params :(WXModuleCallback)callback;
- (void)upload:(NSDictionary *)params :(WXModuleCallback)callback;

@end


@interface WeexNatTransfer : NSObject<WeexNatTransferPro>

@end
