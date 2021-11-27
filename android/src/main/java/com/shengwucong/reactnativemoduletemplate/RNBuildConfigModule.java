package com.shengwucong.reactnativemoduletemplate;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class RNBuildConfigModule extends ReactContextBaseJavaModule  {
    private ReactApplicationContext mContext;

    public RNBuildConfigModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNBuildConfigModule";
    }

    @ReactMethod
    public void getPackageTime(Callback callback) {
        callback.invoke(BuildConfig.PACKAGE_TIME);
    }

}
