# Meteor Acccounts Wechat
Wechat account login for meteor with Cordova support on mobile devices

##Install
```
meteor add boxfish:accounts-wechat
```

##Setup and Usage
1. Now in your app do create the `accounts.js` (or `acoounts.coffee` if you use coffeescript) and put following code inside

 so,it file looks in directory tree- `<your-app-directory>/server/accounts.js`  and put the APP id and APP secret from previous step

    ```
    ServiceConfiguration.configurations.remove({
      service: "wechat"
    });
    ServiceConfiguration.configurations.insert({
      service: "wechat",
      appId: "<your-app-id>",
      scope:'basic',
      secret: "<your-app-secret>"
    });
    ```
2. Now, all things are setup, you are ready to use this package
6. Add following button code for login
```
      Meteor.loginWithWeChat(function (err, res) {
          if (err !== undefined)
            console.log('success ' + res)
          else
            console.log('login failed ' + err)
      });
```


## License

[MIT](https://github.com/worldelites/meteor-accounts-wechat/blob/master/LICENSE)

Contributors
-----------
See [original package contributors](https://github.com/leonzhang1109/meteor-accounts-wechat/graphs/contributors)

See [current package contributors](https://github.com/worldelites/meteor-accounts-wechat/graphs/contributors)
