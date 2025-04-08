gdjs.dedCode = {};
gdjs.dedCode.localVariables = [];
gdjs.dedCode.GDNewVideoObjects1= [];
gdjs.dedCode.GDNewVideoObjects2= [];
gdjs.dedCode.GDBlueButtonWithShadowObjects1= [];
gdjs.dedCode.GDBlueButtonWithShadowObjects2= [];


gdjs.dedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.dedCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.dedCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.dedCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.dedCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dedCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.dedCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dedCode.GDBlueButtonWithShadowObjects1[k] = gdjs.dedCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.dedCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.dedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dedCode.GDNewVideoObjects1.length = 0;
gdjs.dedCode.GDNewVideoObjects2.length = 0;
gdjs.dedCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dedCode.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.dedCode.eventsList0(runtimeScene);
gdjs.dedCode.GDNewVideoObjects1.length = 0;
gdjs.dedCode.GDNewVideoObjects2.length = 0;
gdjs.dedCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dedCode.GDBlueButtonWithShadowObjects2.length = 0;


return;

}

gdjs['dedCode'] = gdjs.dedCode;
