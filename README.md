# Meteor Acccounts Wechat
Wechat account login for meteor with Cordova support on mobile devices

##Install
```
meteor add boxfish:accounts-wechat
```

##Setup and Usage
1. Configure the WeChat service with appId and secret
```
    ServiceConfiguration.configurations.update(
      { "service": "wechat" },
      {
          $set: {
              "service": "wechat",
              "appId": <your-app-id>,
              "secret": <your-app-secret>
          }
      },
      { upsert: true } // If doesn't find wechat, insert one
    );
```

2. Login using WeChat
```
      Meteor.loginWithWeChat(function (err, res) {
          if (err) {
            console.log('success ' + res);
          }
          else {
            console.log('login failed ' + err);
          }
      });
```

## License

[MIT](https://github.com/worldelites/meteor-accounts-wechat/blob/master/LICENSE)

Contributors
-----------
See [original package contributors](https://github.com/leonzhang1109/meteor-accounts-wechat/graphs/contributors)

See [current package contributors](https://github.com/worldelites/meteor-accounts-wechat/graphs/contributors)
