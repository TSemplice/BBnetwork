export default ({ app }) => {
  const { locale } = app.i18n

  const cookiePolicyId = locale === 'it' ? 71076652 : 68631402

  var _iub = _iub || []
  _iub.csConfiguration = {
    askConsentAtCookiePolicyUpdate:true,
    ccpaAcknowledgeOnDisplay:true,
    consentOnContinuedBrowsing:false,
    countryDetection:true,
    enableCcpa:true,
    enableLgpd:true,
    floatingPreferencesButtonDisplay:"bottom-right",
    invalidateConsentWithoutLog:true,
    lgpdAppliesGlobally:false,
    perPurposeConsent:true,
    siteId:2899197,
    whitelabel:false,
    cookiePolicyId,
    lang: locale,
     banner:{
      acceptButtonCaptionColor:"#363787",
      acceptButtonColor:"#DDDB22",
      acceptButtonDisplay:true,
      backgroundColor:"#363787",
      closeButtonDisplay:false,
      customizeButtonCaptionColor:"#363787",
      customizeButtonColor:"#E1F2F2",
      customizeButtonDisplay:true,
      explicitWithdrawal:true,
      listPurposes:true,
      position:"float-bottom-right",
      rejectButtonCaptionColor:"#363787",
      rejectButtonColor:"#DDDB22",
      rejectButtonDisplay:true,
      // backgroundOverlay: true
    }
  }

  window._iub = _iub

  const script1 = document.createElement('script')
  script1.src = '//cdn.iubenda.com/cs/ccpa/stub.js'
  document.getElementsByTagName('head')[0].appendChild(script1)

  const script2 = document.createElement('script')
  script2.async = true
  script2.src = '//cdn.iubenda.com/cs/iubenda_cs.js'
  document.getElementsByTagName('head')[0].appendChild(script2)

  console.log(app.i18n.locale, _iub)
}
