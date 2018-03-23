//
//  NatVibration.h
//
//  Created by huangyake on 17/1/7.
//  Copyright © 2017 Nat. All rights reserved.
//


#import <Foundation/Foundation.h>

@interface NatVibration : NSObject
typedef void (^NatCallback)(id error,id result);
+ (id)singletonManger;


- (void)vibrate:(NSNumber *)time :(NatCallback)callback;

@end
