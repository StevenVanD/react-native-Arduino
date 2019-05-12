package com.icapps.app;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactnative_boilerplate";
    }

    @Override
    protected void onCreate(Bundle state){
        super.onCreate(state);
        if(BuildConfig.DEBUG) {
            String ip = BuildConfig.IP;
            SharedPreferences preferences =
                PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
                preferences.edit().putString("debug_http_host", ip + ":8081").apply();
        }
    }
}
