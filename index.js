// Choose one or more supported permissions to request:
// assistant.SupportedPermissions.NAME
// assistant.SupportedPermissions.DEVICE_PRECISE_LOCATION
// assistant.SupportedPermissions.DEVICE_COARSE_LOCATION
// assistant is an instance of ApiAiAssistant or ActionsSdkAssistant
let permission = assistant.SupportedPermissions.NAME;
assistant.askForPermission('To address you by name', permission);
// assistant is an instance of ApiAiAssistant or ActionsSdkAssistant
if (assistant.isPermissionGranted()) {
	let displayName = assistant.getUserName().displayName;
	let deviceCoordinates = assistant.getDeviceLocation().coordinates;
}
