package com.nat.weex;

import com.nat.device_base.HLBaseModule;
import com.nat.device_base.HLModuleResultListener;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

/**
 * Created by Daniel on 17/2/17.
 * Copyright (c) 2017 Nat. All rights reserved.
 */

public class DeviceBaseModule extends WXModule{

    @JSMethod
    public void info(final JSCallback jsCallback){
        HLBaseModule.getInstance(mWXSDKInstance.getContext()).info(new HLModuleResultListener() {
            @Override
            public void onResult(Object o) {
                jsCallback.invoke(o);
            }
        });
    }
}
