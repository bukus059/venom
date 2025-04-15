gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDWoodRedBarObjects1= [];
gdjs.Game_32SceneCode.GDWoodRedBarObjects2= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects2= [];
gdjs.Game_32SceneCode.GDNewTextObjects1= [];
gdjs.Game_32SceneCode.GDNewTextObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects2= [];
gdjs.Game_32SceneCode.GDNewText2Objects1= [];
gdjs.Game_32SceneCode.GDNewText2Objects2= [];
gdjs.Game_32SceneCode.GDNewText3Objects1= [];
gdjs.Game_32SceneCode.GDNewText3Objects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Game_32SceneCode.GDNewSprite2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Game_32SceneCode.GDNewSprite3Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Game_32SceneCode.GDNewSpriteObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_32SceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").SetCooldownDurationOp(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WoodRedBar"), gdjs.Game_32SceneCode.GDWoodRedBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodRedBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodRedBarObjects1[i].SetValue(gdjs.Game_32SceneCode.GDWoodRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ded", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ded", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32SceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "boo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "boo") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].addForce(-(3000), -(5000), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Game_32SceneCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewText3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
