/**
 * Turn on/off accessibility mode depending on the state.
 * @param {boolean} state True to turn on accessibility mode, false otherwise.
 * @package
 */
BlocklyDuino.openKeyMappingModal = function () {
    //translation of key assignement name
    var actions = [
        Blockly.navigation.ACTION_PREVIOUS,
        Blockly.navigation.ACTION_OUT,
        Blockly.navigation.ACTION_NEXT,
        Blockly.navigation.ACTION_IN,
        Blockly.navigation.ACTION_INSERT,
        Blockly.navigation.ACTION_MARK,
        Blockly.navigation.ACTION_DISCONNECT,
        Blockly.navigation.ACTION_TOOLBOX,
        Blockly.navigation.ACTION_EXIT
    ];
    for (var i = 0, action; action = actions[i]; i++) {
        document.getElementById(action.name + '_label').innerText = MSG['actionName' + i];
    };
    var dialogKeyMap = $("#keyMappingModal").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        width: 926,
        height: 445
    });
    if (!dialogKeyMap.dialog("isOpen")) {
        dialogKeyMap.dialog("open").dialog("option", "buttons");
    };
};

BlocklyDuino.initKeyMap = function () {
    var actions = [
        Blockly.navigation.ACTION_PREVIOUS,
        Blockly.navigation.ACTION_OUT,
        Blockly.navigation.ACTION_NEXT,
        Blockly.navigation.ACTION_IN,
        Blockly.navigation.ACTION_INSERT,
        Blockly.navigation.ACTION_MARK,
        Blockly.navigation.ACTION_DISCONNECT,
        Blockly.navigation.ACTION_TOOLBOX,
        Blockly.navigation.ACTION_EXIT
    ];
    createKeyMappingList(actions);
};
