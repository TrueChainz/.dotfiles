!function(t){var h="",a=[],n={},l=["newvaultGlobal","dialog","buttons"],r=["dialog","dialogFields","jsOTP.min.js"],f=function(){return"function"==typeof LPPlatform.isSPA&&LPPlatform.isSPA()},y=7500,L=function(o){a.push(o)},S=function(o){for(var e=0,i=a.length;e<i;++e)a[e]===o&&a.splice(e,1)},g=function(o){return h+LPPlatform.getResourcePath(o)},s=(d=null,o=function(o,e){for(var i=0,t=o.length;i<t;++i){var a=o[i].getAttribute(e);a&&(d[a]=!0)}},{loadFile:function(o,e){null===d&&s.initialize();for(var t=g(o.name),i=Object.keys(d),a=t,l=new RegExp("^("+t.replace(/[^a-zA-Z0-9]/g,"\\$&")+").*"),r=0;r<i.length;r++)if(i[r].match(l)||"undefined"!=typeof bundleSourceFiles&&Array.isArray(bundleSourceFiles)&&-1!==bundleSourceFiles.indexOf(o.name)){a=i[r];break}void 0===d[a]?(d[a]=!0,n[t]=[e],o.load(function(){var o=n[t];delete n[t];for(var e=0,i=o.length;e<i;++e)o[e]()})):n[t]?n[t].push(e):e()},initialize:function(){null===d&&(d={},"undefined"!=typeof bundleSourceFiles&&Array.isArray(bundleSourceFiles)&&o(bundleSourceFiles.map(function(o){return{getAttribute:function(){return o}}})),o(t.getElementsByTagName("link"),"href"),o(t.getElementsByTagName("script"),"src"))}}),d,o,c=function(){this.files=[],this.addedFiles={}},e=(c.prototype.load=function(o){var e=0,i=this.files,t=function(){++e===i.length?o&&o():s.loadFile(i[e],t)};0===e&&0<i.length&&s.loadFile(i[0],t)},c.prototype.addFile=function(o){void 0===this.addedFiles[o.name]&&(this.files.push(o),this.addedFiles[o.name]=!0)},c.prototype.addFiles=function(o){if(o)for(var e=0,i=(o=[].concat(o)).length;e<i;++e)this.addFile(o[e])},function(i){i.indexOf(".js")!==i.length-3&&(i+=".js"),this.name=i,this.load=function(o){var e=t.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",g(i)),LPPlatform.addEventListener(e,"load",o),t.body.appendChild(e)}}),i=function(i){i.indexOf(".css")!==i.length-4&&(i+=".css"),this.name=i,this.load=function(o){var e=t.createElement("link");e.setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",g(i)),LPPlatform.addEventListener(e,"load",o),t.body.appendChild(e)}},T=function(o){c.call(this);for(var e=0,i=(o=o?l.concat(o):l).length;e<i;++e)this.addFile(o[e])},w=(((T.prototype=Object.create(c.prototype)).constructor=T).prototype.addFile=function(o){o&&c.prototype.addFile.call(this,new i(o))},T.prototype.load=function(o){for(var e=0,i=this.files,t=function(){++e===i.length&&o()},a=0,l=i.length;a<l;++a)s.loadFile(i[a],t)},function(o){c.call(this);for(var e=0,i=(o=o?r.concat(o):r).length;e<i;++e)this.addFile(o[e])}),u=(((w.prototype=Object.create(c.prototype)).constructor=w).prototype.addFile=function(o){o&&c.prototype.addFile.call(this,new e(o))},function(l){var t=this,i=!1,a=null,e=new w(l.js),r=new T(l.css),n=null,g=(this.parentElementID=l.parentElementID,this.type=l.type,this.htmlSource=l.htmlSource,function(){if(null===n)for(var o in dialogs)if(dialogs[o]===t){n=o;break}return n}),s=function(o,e){var i,t,a={},l=o?[].concat(o):[];for(e=e?[].concat(e):[],i=0,t=l.length;i<t;++i)a[l[i]]=!0;for(i=0,t=e.length;i<t;++i)a.hasOwnProperty(e[i])||l.push(e[i]);return l},d=(this.extend=function(o){return new LPDialog.DialogLoader({id:o.id||l.id,htmlSource:s(l.htmlSource,o.htmlSource),css:s(l.css,o.css),js:s(l.js,o.js),type:o.type||l.type,parentElementID:o.parentElementID||l.parentElementID})},this.loadedJS=function(){return i},this.getID=function(){return l.id},function(o){var e=window[l.type];a=new e(c),i=!0,o(a)}),c,u=((c=this).loadJS=function(o){e?(Topics.get(Topics.DIALOG_LOADING).publish(),e.load(function(){d(o)})):d(o)},function(o,e,i){i=i||0;var t=o.find("img"),a,l,r;if(0<t.length)for(var n=(l=null,r=!1,(a=0)<i&&(l=setTimeout(d,i)),function(){++a,r||a!==t.length||(clearTimeout(l),l=null,e())}),g=0,s=t.length;g<s;++g)$(t[g]).bind("load",n);else e();function d(){r=!0,a<t.length&&e()}}),D=function(e,o){(o=$(o)).find("[dialogsection]").addBack("[dialogsection]").each(function(){var o=this.getAttribute("dialogsection"),o=e.find("[dialogsection="+o+"]");o.before(this),o.remove()}),o.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var o=this.getAttribute("dialogsectionbefore");e.find("[dialogsection="+o+"]").before(this)}),o.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var o=this.getAttribute("dialogsectionafter");e.find("[dialogsection="+o+"]").after(this)}),o.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var o=this.getAttribute("dialogsectionappend");e.find("[dialogsection="+o+"]").append(this)}),o.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var o=this.getAttribute("dialogsectionprepend");e.find("[dialogsection="+o+"]").prepend(this)})},p=function(e,i,t,a){var o;t<i.length?(o=f()?l.htmlSource[t]:h+l.htmlSource[t],LPPlatform.getHTML(o,function(o){D(e,o),p(e,i,++t,a)})):a()},m=function(e,o){var i=function(){u(e,o,y)},t,t;l.htmlSource instanceof Array?(t=f()?l.htmlSource[0]:h+l.htmlSource[0],LPPlatform.getHTML(t,function(o){e.html(o),p(e,l.htmlSource,1,i)})):l.htmlSource?(t=f()?l.htmlSource:h+l.htmlSource,LPPlatform.getHTML(t,function(o){e.html(o),i()})):i()};this.load=function(o,e){r?r.load(function(){m(o,e)}):m(o,e)},this.preload=function(o){var e=o.callback,i=o.arguments;i&&i[0]?i[0].type=this.type:i=[{type:this.type}],this.loadedJS()?e(a,i):(L(t),this.loadJS(function(){LPDialog.beforeLoad?LPDialog.beforeLoad(g(),function(){e(a,i)}):e(a,i),S(t)}))},this.open=function(){this.preload({arguments:arguments,callback:function(o,e){o.open.apply(o,e)}})},this.close=function(){a&&a.close.apply(a,arguments)},this.getDialog=function(){return a}});LPRequire={requireJS:function(o,e){new w(o).load(e)}},LPDialog={DialogLoader:u,JSFileSet:w,CSSFileSet:T,getPendingCount:function(){return a.length},getDialogs:function(){var o=[],e;for(e in dialogs)o.push(dialogs[e]);return o},setBaseURL:function(o){h=o},openDialog:function(o,e){dialogs[o].open(e)}}}("undefined"!=typeof document&&document),(dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:["buttons","dialog","siteDialog","passwordMeter"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","editableFieldsDialog","siteDialog","passwordMeter","bloodhound","bloodhoundDropdown","confirmationDialog"],type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:["buttons","dialog","noteDialog"],js:["selectDropdown","typeaheadDropdown","stateDropdown","phoneInput","cc3l","dialog","dialogWithGroupInput","noteDialog","countrySelect","timezoneSelect"],type:"NoteDialog"}),customNoteTemplate:new LPDialog.DialogLoader({id:"customNoteTemplateDialog",htmlSource:"customNoteTemplateDialog.html",css:["buttons","dialog","customNoteTemplateDialog"],js:["selectDropdown","typeaheadDropdown","dialog","customNoteTemplateDialog"],type:"CustomNoteTemplateDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:["buttons","dialog","formFillDialog"],js:["selectDropdown","typeaheadDropdown","formFillDialog","countrySelect","timezoneSelect","stateDropdown","phoneInput","cc3l"],type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",htmlSource:"acceptRejectShareDialog.html",css:["buttons","dialog","acceptRejectShareDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","acceptRejectShareDialog"],type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:["buttons","dialog","shareDialog","containerSelectionDialog","vaultItem"],js:["selectDropdown","typeaheadDropdown","dialog","shareDialog","bloodhound","bloodhoundDropdown","vaultItemTypeahead","sharingModel"],type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:["buttons","dialog","containerSelectionDialog","identityDialog"],js:["dialog","containerSelectionDialog","identityDialog"],type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:["buttons","dialog","containerSelectionDialog","sharedFolderAccessDialog"],js:["dialog","containerSelectionDialog","sharedFolderAccessDialog"],type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:["buttons","dialog","sharedFolderDialog"],js:["dialog","sharedFolderDialog","bloodhound","selectDropdown","typeaheadDropdown","bloodhoundDropdown"],type:"SharedFolderDialog"}),familiesSharedFolder:new LPDialog.DialogLoader({id:"familiesSharedFolderDialog",htmlSource:"familiesSharedFolderDialog.html",css:["buttons","dialog","familiesSharedFolderDialog"],js:["dialog","selectDropdown","familiesSharedFolderDialog"],type:"FamiliesSharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:["buttons","dialog"],js:["dialog","dialogWithGroupInput","folderDialog"],type:"CreateSharedFolderDialog"}),convertLegacySharedFolder:new LPDialog.DialogLoader({id:"convertLegacySharedFolderDialog",htmlSource:"convertLegacySharedFolderDialog.html",css:["buttons","dialog","convertLegacySharedFolderDialog"],js:["dialog","selectDropdown","convertLegacySharedFolderDialog"],type:"ConvertLegacySharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:["buttons","dialog","createCreditMonitoringDialog"],js:["dialog","createCreditMonitoringDialog"],type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:["buttons","dialog","generatePasswordDialog","passwordMeter"],js:["dialog","generatePasswordDialog","selectDropdown","passwordMeter"],type:"GeneratePasswordDialog"}),betterGeneratePassword:new LPDialog.DialogLoader({id:"betterGeneratePasswordDialog",htmlSource:"betterGeneratePasswordDialog.html",css:["buttons","dialog","passwordMeter","betterGeneratePassword","betterGeneratePasswordDialog"],js:["dialog","betterGeneratePasswordDialog","selectDropdown","passwordMeter"],type:"BetterGeneratePasswordDialog"}),login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:["loginDialog"],js:["loginDialog","capslockstate"],type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:["repromptDialog"],js:["repromptDialog"],type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",css:["buttons","dialog","createAccountDialog","passwordMeter"],js:["dialog","createAccountDialog","selectDropdown","passwordMeter"],type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:["buttons","dialog"],js:["dialog","selectDropdown","typeaheadDropdown","dialogWithGroupInput","folderDialog"],htmlSource:"folderDialog.html"}),fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:["buttons","dialog","fieldHistoryDialog"],js:["dialog","fieldHistoryDialog"],type:"FieldHistoryDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",htmlSource:"alertDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"AlertDialog"}),enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:["buttons","dialog"],js:["dialog","enterpriseTrialDialog"],type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","denyEmergencyAccessDialog"],type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:["buttons","dialog"],js:["dialog","verifyEmailDialog"],type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:["buttons","dialog","passwordMeter"],js:["dialog","dialogWithGroupInput","editableFieldsDialog","passwordMeter","applicationDialog"],type:"ApplicationDialog"}),chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:["buttons","dialog","chooseProfileDialog"],js:["dialog","chooseProfileDialog"],type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:["buttons","dialog","vaultItem"],js:["dialog","vaultItemSelectDialog"],type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",css:["buttons","dialog"],js:["dialog","inviteFriendsDialog"],type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","addEmergencyAccessDialog"],type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:["buttons","dialog"],js:["dialog","upgradePremiumDialog"],type:"UpgradePremiumDialog"}),upgradeFamiliesForFolderSharing:new LPDialog.DialogLoader({id:"upgradeFamiliesForFolderSharingDialog",htmlSource:"upgradeFamiliesForFolderSharingDialog.html",css:["buttons","dialog"],js:["dialog","upgradeFamiliesForFolderSharingDialog"],type:"UpgradeFamiliesForFolderSharingDialog"}),familiesInvitation:new LPDialog.DialogLoader({id:"familiesInvitationDialog",htmlSource:"familiesInvitationDialog.html",css:["buttons","dialog"],js:["dialog","familiesInvitationDialog"],type:"FamiliesInvitationDialog"}),tryFamilies:new LPDialog.DialogLoader({id:"tryFamiliesDialog",htmlSource:"tryFamiliesDialog.html",css:["buttons","dialog"],js:["dialog","tryFamiliesDialog"],type:"TryFamiliesDialog"}),addTotpDialog:new LPDialog.DialogLoader({id:"addTotpDialog",htmlSource:"addTotpDialog.html",css:["buttons","dialog"],js:["dialog","addTotpDialog"],type:"AddTotpDialog"}),sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:["buttons","dialog"],js:["dialog","sharingKeyDialog"],type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:["dialog","dialogWithGroupInput","editableFieldsDialog"],type:"AddFormFieldDialog"}),addItem:new LPDialog.DialogLoader({id:"addItemDialog",htmlSource:"addItemDialog.html",js:["addItemDialog"],css:["addItemDialog","lpGrid"],type:"AddItemDialog"}),restrictedSharing:new LPDialog.DialogLoader({id:"restrictedSharingDialog",htmlSource:"restrictedSharingDialog.html",js:["restrictedSharingDialog"],css:["buttons","restrictedSharingDialog"],type:"RestrictedSharingDialog"}),restrictedEmergencyAccess:new LPDialog.DialogLoader({id:"restrictedEmergencyAccess",htmlSource:"restrictedEmergencyAccessDialog.html",js:["restrictedEmergencyAccessDialog"],css:["dialog","buttons","restrictedEmergencyAccessDialog"],type:"RestrictedEmergencyAccessDialog"}),vaultTakeoverUpdateNotification:new LPDialog.DialogLoader({id:"vaultTakeoverUpdateNotification",htmlSource:"vaultTakeoverUpdateNotification.html",js:["vaultTakeoverUpdateNotification"],css:["dialog","buttons","vaultTakeoverUpdateNotification"],type:"VaultTakeoverUpdateNotificationDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","lpTag","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),vaultInfoBanner:new LPDialog.DialogLoader({css:["buttons","dialog","lpGrid","vaultInfoBanner"],htmlSource:"vaultInfoBanner.html",js:["dialog","vaultInfoBanner"],type:"VaultInfoBanner"}),vaultTierExpiredDialog:new LPDialog.DialogLoader({id:"vaultTierExpiredDialog",htmlSource:"vaultTierExpiredDialog.html",css:["buttons","dialog"],js:["dialog","vaultTierExpiredDialog"],type:"TierExpiredDialog"}),vaultBillingAddressDialog:new LPDialog.DialogLoader({id:"vaultBillingAddressDialog",htmlSource:"vaultBillingAddressDialog.html",js:["vaultBillingAddressDialog"],css:["dialog","buttons","vaultBillingAddressDialog"],type:"VaultBillingAddressDialog"}),encryptedExportDialog:new LPDialog.DialogLoader({id:"encryptedExportDialog",htmlSource:"encryptedExportDialog.html",css:["encryptedExportDialog","dialog"],js:["encryptedExportDialog","dialog"],type:"EncryptedExportDialog"}),vaultDeviceLimitDialog:new LPDialog.DialogLoader({id:"vaultDeviceLimitDialog",htmlSource:"vaultDeviceLimitDialog.html",css:["vaultDeviceLimitDialog","buttons","dialog"],js:["vaultDeviceLimitDialog"],type:"VaultDeviceLimitDialog"}),vaultAccountManagementDialog:new LPDialog.DialogLoader({id:"vaultAccountManagementDialog",htmlSource:"vaultAccountManagementDialog.html",css:["vaultAccountManagementDialog","buttons","dialog"],js:["vaultAccountManagementDialog"],type:"VaultAccountManagementDialog"}),vaultDeleteAccountDialog:new LPDialog.DialogLoader({id:"vaultDeleteAccountDialog",htmlSource:"vaultDeleteAccountDialog.html",css:["vaultDeleteAccountDialog","buttons","dialog"],js:["vaultDeleteAccountDialog"],type:"VaultDeleteAccountDialog"}),reTrialDialog:new LPDialog.DialogLoader({id:"reTrialDialog",htmlSource:"reTrialDialog.html",css:["reTrialDialog","buttons","dialog"],js:["reTrialDialog"],type:"ReTrialDialog"}),vaultUpgradeToPremiumDialog:new LPDialog.DialogLoader({id:"vaultUpgradeToPremiumDialog",htmlSource:"vaultUpgradeToPremiumDialog.html",css:["vaultUpgradeToPremiumDialog","dialog"],js:["vaultUpgradeToPremiumDialog","dialog"],type:"VaultUpgradeToPremiumDialog"})}).changePassword=dialogs.vaultItemSelect.extend({id:"changePasswordDialog",js:"changePasswordDialog",type:"ChangePasswordDialog"}),"undefined"!=typeof module&&(module.exports=dialogs),function(){var o,e;(function(){"undefined"!=typeof $?$.extend.apply($,arguments):Object.assign.apply(Object,arguments)})(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:["buttons","dialog","notificationDialog"],js:["dialog","notificationDialog"],type:"NotificationDialog"}),securityNotice:new LPDialog.DialogLoader({id:"securityNoticeDialog",htmlSource:"securityNoticeDialog.html",css:["buttons","dialog","securityNoticeDialog"],js:["dialog","securityNoticeDialog"],type:"SecurityNoticeDialog"}),breachAlert:new LPDialog.DialogLoader({id:"breachAlertDialog",htmlSource:"breachAlertDialog.html",css:["buttons","dialog","breachAlertDialog"],js:["dialog","breachAlertDialog"],type:"BreachAlertDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:["buttons","dialog","preferencesDialog"],js:["dialog","preferencesDialog"],type:"PreferencesDialog"}),requestClipboardPermissions:new LPDialog.DialogLoader({id:"requestClipboardPermissionsDialog",htmlSource:"requestClipboardPermissionsDialog.html",css:["buttons","dialog","requestClipboardPermissionsDialog"],js:["dialog","requestClipboardPermissionsDialog"],type:"RequestClipboardPermissionsDialog"}),introTutorialWelcome:new LPDialog.DialogLoader({id:"introTutorialWelcomeDialog",htmlSource:"IntroTutorial/introTutorialWelcomeDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialHelpDialogOriginal","IntroTutorial/introTutorialWelcomeDialog"],type:"IntroTutorialWelcomeDialog"}),inContextTutorialWelcome:new LPDialog.DialogLoader({id:"inContextTutorialWelcomeDialog",htmlSource:"IntroTutorial/inContextTutorialWelcomeDialog.html",css:["fonts/opensans/opensans","buttons","dialog","lpGrid","IntroTutorial/inContextTutorial"],js:["dialog","lpTile","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/inContextTutorialWelcomeDialog"],type:"InContextTutorialWelcomeDialog"}),introTutorialSelectSite:new LPDialog.DialogLoader({id:"introTutorialSelectSiteDialog",htmlSource:"IntroTutorial/introTutorialSelectSiteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/introTutorialSelectSiteDialog"],type:"IntroTutorialSelectSiteDialog"}),introTutorialComplete:new LPDialog.DialogLoader({id:"introTutorialCompleteDialog",htmlSource:"IntroTutorial/introTutorialCompleteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialCompleteDialog"],type:"IntroTutorialCompleteDialog"}),introTutorialHelp:new LPDialog.DialogLoader({id:"introTutorialHelpDialog",htmlSource:"IntroTutorial/introTutorialHelpDialog.html",css:"IntroTutorial/introTutorialHelpDialog",js:["IntroTutorial/introTutorialHelpDialog"],type:"IntroTutorialHelpDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),migration:new LPDialog.DialogLoader({id:"migrationPopup",htmlSource:"migrationPopup.html",css:["buttons","migrationPopup"],js:["migrationPopup"],type:"MigrationPopup"}),firefoxAccept:new LPDialog.DialogLoader({id:"firefoxAccept",htmlSource:"extensionFirefoxAccept.html",css:["buttons","dialog","lpGrid","extensionFirefoxAccept"],js:["dialog","request","extensionFirefoxAccept"],type:"ExtensionFirefoxAccept"}),siteFeedback:new LPDialog.DialogLoader({id:"siteFeedbackDialog",htmlSource:"siteFeedback.html",css:["buttons","dialog","siteFeedback"],js:["dialog","siteFeedbackDialog"],type:"SiteFeedbackDialog"})}),dialogs.login=dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog",js:["extensionLoginDialog","selectDropdown","typeaheadDropdown"],type:"ExtensionLoginDialog"}),dialogs.siteTutorial=dialogs.site.extend({css:"IntroTutorial/introTutorialHelpDialogOriginal",js:["IntroTutorial/introTutorialHelpDialogOriginal","extensionSiteTutorialDialog"],type:"ExtensionSiteTutorialDialog"}),e=new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"extensionLoginDialogSimple.html",css:["fonts/opensans/opensans.css","loginDialog","extensionDialogSimple","extensionLoginDialogBase","lpGrid","backgroundOverlay"],js:["loginDialog","extensionLoginDialog","capslockstate","extensionLoginDialogSimple","selectDropdown","typeaheadDropdown","fieldValidator","backgroundOverlay"],type:"ExtensionLoginDialogSimple"}),dialogs.loginSimple=e.extend({css:["extensionLoginDialogSimple"]}),dialogs.loginTab=e.extend({css:["extensionLoginDialogTab"]}),dialogs.loginApp=dialogs.loginSimple.extend({js:["extensionLoginDialogApp"],type:"ExtensionLoginDialogApp"}),e=new LPDialog.DialogLoader({id:"createAccountDialog",css:["fonts/opensans/opensans.css","extensionDialogSimple","buttons","dialog","lpGrid","passwordMeter","backgroundOverlay","extensionCreateAccountBase"],js:["createAccountDialog","dialog","extensionCreateAccount","selectDropdown","passwordMeter","fieldValidator","backgroundOverlay","fieldToolTip","emailToolTip","buildVars"],type:"ExtensionCreateAccount"}),dialogs.createAccountSimple=e.extend({htmlSource:"extensionCreateAccountDialogSimple.html",css:["extensionCreateAccountSimple"],js:["extensionCreateAccountSimple"],type:"ExtensionCreateAccountSimple"}),dialogs.createAccountIcon=e.extend({htmlSource:"extensionCreateAccountDialogIcon.html",css:["extensionCreateAccountIcon","compositeBackgroundOverlay"],js:["extensionCreateAccountIcon","request","lpArrow","compositeBackgroundOverlay"],type:"ExtensionCreateAccountIcon"})}();