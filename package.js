Package.describe({
  "name": "boxfish:accounts-wechat",
  "summary": "Login service for WeChat accounts",
  "version": "0.9.3",
  "git": "https://github.com/boxfish/meteor-accounts-wechat.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');

  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('boxfish:wechat@0.9.3', ['client', 'server']);

  api.addFiles('wechat_login_button.css','client');

  api.addFiles("wechat.js");

});
