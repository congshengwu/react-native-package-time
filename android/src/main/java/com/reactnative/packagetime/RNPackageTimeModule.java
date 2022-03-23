package com.reactnative.packagetime;

import android.content.pm.PackageManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class RNPackageTimeModule extends ReactContextBaseJavaModule  {
    private ReactApplicationContext mContext;

    public RNPackageTimeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNPackageTimeModule";
    }

    @ReactMethod
    public void getPackageTime(Callback callback) {
        callback.invoke(BuildConfig.PACKAGE_TIME);
    }

    @ReactMethod
    public void getLastUpdateTime(Callback callback) {
        try {
            String packageName = mContext.getPackageName();
            PackageManager pm = mContext.getPackageManager();
            long lastUpdateTime = pm.getPackageInfo(packageName, 0).lastUpdateTime;
            callback.invoke(String.valueOf(lastUpdateTime));
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void getFirstInstallTime(Callback callback) {
        try {
            String packageName = mContext.getPackageName();
            PackageManager pm = mContext.getPackageManager();
            long firstInstallTime = pm.getPackageInfo(packageName, 0).firstInstallTime;
            callback.invoke(String.valueOf(firstInstallTime));
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }

}
