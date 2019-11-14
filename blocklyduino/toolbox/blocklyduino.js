function addToolbox() {
	var insideT = ['<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyduinoToolbox" style="display: none">',
    '<category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">',
      '<block type="controls_if"></block>',
      '<block type="logic_compare"></block>',
      '<block type="logic_operation"></block>',
      '<block type="logic_negate"></block>',
      '<block type="logic_boolean"></block>',
      '<block type="logic_null"></block>',
      '<block type="logic_ternary"></block>',
    '</category>',
  '</xml>'].join('');  
$("body").append(insideT);
};